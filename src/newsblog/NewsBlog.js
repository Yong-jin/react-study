import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {

    //javascript 코드
    let title = 'React Study';

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    //글 제목 3개
    let [likeCount, setLikeCount] = useState([0, 0, 0]);
    //좋아요 갯수 3개

    let [modalFlag, setModalFlag] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);
    let [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>

            {
                news.map((item, index) => {
                    //'오늘의 뉴스'  0
                    //'어제의 뉴스'  1
                    //'내일의 뉴스'  2

                    return (
                        <div className="post-list">
                            <h4 onClick={() => { //제목 클릭
                                setModalFlag(!modalFlag); //모달창이 On/Off 전환
                                //어떤 뉴스를 눌렀는지! -> 저장
                                //setSelectedTitle(news[index]);
                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCount[index]);
                            }}>{news[index]} <span onClick={(event) => {
                                event.stopPropagation(); //이벤트 추가 전달 stop
                                let temp = [...likeCount];
                                temp[index]++;
                                setLikeCount(temp);
                            }}>❤</span> {likeCount[index]} </h4>
                            <p>내용 무</p>
                            <button onClick={()=>{
                                //누른 내용 데이터가 삭제

                                //index 활용
                                //splice 활용
                                let temp = [...news];
                                temp.splice(index, 1);
                                setNews(temp);

                                likeCount.splice(index, 1);

                                
                            }}>삭제</button>
                        </div>
                    )

                })
            }

            <button onClick={() => {
                let temp = [...news];
                temp[0] = 'Today News';
                setNews(temp);
            }}>제목 변경</button>

            <div>
                <input type="text" id="input_news" value={inputText} onChange={(event)=>{
                    //console.log(event);
                    //console.log(event.target.value);
                    setInputText(event.target.value);
                }}/>
                <button onClick={()=>{
                    //발행 버튼을 눌렀을때
                    //전제조건 : 양측에 있는 띄어쓰기는 제외 (trim)
                    inputText = inputText.trim();
                    
                    //if( inputText.trim() == '' ){
                    //if( inputText == '' ){
                    //if( inputText.length == 0 ){
                    if( inputText.length == 0 
                        || inputText == '' 
                        || inputText == null 
                        || inputText == undefined ) {
                        alert('값을 입력하세요');
                        return;
                    }

                    console.log('a'+inputText);

                    let temp = [...news];
                    temp.push(inputText);
                    setNews(temp);

                    likeCount.push(0);

                    setInputText('');

                    //입력된 값 확인
                    //news 배열에 추가 저장

                    /*
                    let title = document.getElementById('input_news').value;
                    console.log(title);

                    let temp = [...news];
                    temp.push(title);
                    setNews(temp);

                    document.getElementById('input_news').value = '';
                    */

                }}>발행</button>
            </div>

            {
                modalFlag == true ? <Modal title={selectedTitle} likeCount={selectedLikeCount} news={news} setNews={setNews} bgColor={'lightcyan'} /> : null
            }


        </div>
    )
}

export default NewsBlog;
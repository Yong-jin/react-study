import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog(){

    //javascript 코드
    let title = 'React Study';

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    let [likeCount, setLikeCount] = useState(0);

    let [modalFlag, setModalFlag] = useState(false);

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={ {color:"orange", fontSize:"20px"} }>{title}</div>
            </div>

            <div className="post-list">
                <h4 onClick={()=>{

                    setModalFlag( !modalFlag );

                    //setModalFlag( modalFlag ? false : true );

                    // if(modalFlag){
                    //     setModalFlag(false);
                    // } else {
                    //     setModalFlag(true);
                    // }
                    
                }}>{news[0]} <span onClick={(event)=>{
                    //event.preventDefault();
                    event.stopPropagation(); //이벤트 추가 전달 stop
                    console.log('클릭');
                    setLikeCount(likeCount + 1);    //likeCount = likeCount + 1;
                    console.log(likeCount);
                }}>❤</span> {likeCount} </h4>
                <p>내용 무</p>
            </div>

            <div className="post-list">
                <h4>{news[1]}</h4>
                <p>내용 무</p>
            </div>
            
            <div className="post-list">
                <h4>{news[2]}</h4>
                <p>내용 무</p>
            </div>

            {/* <div className="post-list">
                <h4>오늘의 뉴스</h4>
                <p>내용 무</p>
            </div>
            <div className="post-list">
                <h4>어제의 뉴스</h4>
                <p>내용 무</p>
            </div>
            <div className="post-list">
                <h4>내일의 뉴스</h4>
                <p>내용 무</p>
            </div> */}
            <button onClick={()=>{
                    //news[0] = 'Today News';  //'오늘의 뉴스' -> 'Today News'
                    //setNews(news);  //배열 : 참조변수 : 주소 : 주소가 바뀌어야한다 : 새로운 배열
                    
                    //news = ['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스'];
                    //news = ['Today News', '어제의 뉴스', '내일의 뉴스'];

                    //setNews(['Today News', '어제의 뉴스', '내일의 뉴스']); 주소가 바뀌면 re-Redering 

                    //array 새로운 배열 deep copy
                    let temp = [...news];   
                    
                    //temp[0] = 'Today News';  //0인덱스 값 변경
                    
                    //temp.shift();  //['어제의 뉴스', '내일의 뉴스']
                    //temp.unshift('Today News'); //['Today News', '어제의 뉴스', '내일의 뉴스']

                    temp.splice(0, 1, 'Today News');

                    setNews(temp);   // news = temp; 주소가 저장 

                }}>제목 변경</button>

            {
                modalFlag == true ? <Modal/> : null
            }
            {
                //modalFlag && <Modal/>
            }

        </div>
    )
}

export default NewsBlog;

import './AppRS.css';
import axios from 'axios';
import DrinkItem from './DrinkItem';
import { useState } from 'react';

function AppRS() {

    let [drinkList, setDrinkList] = useState([{ item: '아이스티', type: '차' }]);
    let [typeFlag, setTypeFlag] = useState(true);
    let [num, setNum] = useState(0);

    return (
        <div>
            <h1>AppRS</h1>

            <div>
                <button onClick={() => {
                    // ajax  XMLHttpRequest
                    // fetch axios
                    //axios.get('http://localhost:8080/api/getMsg')

                    //package.json 에 proxy 설정 추가
                    //react fe 에서 요청할때는 3000포트로 요청하듯이 경로 작성
                    //spring 서버에 해당 api 요청 경로를 처리하는 url 주소 맵핑

                    axios.get('/api/getMsg')
                        .then(response => console.log(response.data))
                        .catch(error => console.log(error))
                }}>데이터 요청 get</button>
                <br />

                <button onClick={() => {
                    axios.get('/api/getDrinks')
                        .then(response => {
                            console.log(response.data);
                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);

                            // let temp2 = [...drinkList];
                            // response.data.map((item)=>{
                            //     temp2.push(item);
                            // })
                            // setDrinkList(temp2);
                        })
                        .catch(error => console.log(error))
                }}>데이터 요청 Drinks</button>

                <br />

                <button onClick={() => {

                    let paramType = '';
                    if (typeFlag) {
                        paramType = '커피';
                        setTypeFlag(!typeFlag);
                    } else {
                        paramType = '탄산음료';
                        setTypeFlag(!typeFlag);
                    }

                    axios.get('/api/getDrinksDiv?type=' + paramType)
                        .then(response => {
                            console.log(response.data);
                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);
                        })
                        .catch(error => console.log(error))
                }}>데이터 요청 Drinks 구분요청</button>

                <br />

                <button onClick={() => {
                    //axios.post('/api/getDrinksDrinkItem', { item:'na', type:'coffee' })
                    setNum(num + 1);
                    
                    axios.post(
                        '/api/getDrinksNum',
                        String(num),
                        {
                            headers : {
                                //'Content-Type':'text/plain'
                                'Content-Type':'application/json'
                            }
                        }
                    )
                        .then(response => {
                            console.log(response.data);
                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);
                        })
                        .catch(error => console.log(error))
                }}>데이터 요청 post</button>
            </div>

            <hr />

            {
                drinkList.map((item, index) => {
                    return <DrinkItem drinkItem={item} />;
                })
            }

        </div>
    );
}

//npm install axios 설치

export default AppRS;
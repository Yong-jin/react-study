import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import './Detail.css';

function Detail({ foods }) {

    //let { index } = useParams(); 
    let { id } = useParams();

    let [orderCount, setOrderCount] = useState(0);
    const [smShow, setSmShow] = useState(false);

        
    let [viewStatus, setViewStatus] = useState('');
    

    //fd002

    // foods 안에 id 가   파라미터로 넘어온 id랑 같은!! 데이터 찾기!!
    let food = foods.find((item) => {
        return item.id == id;
    });

    // let index = foods.findIndex((item)=>{
    //     return item.id == id;
    // });
    useEffect(()=>{

        setTimeout(()=>{
            setViewStatus('end');
        }, 300);

    }, []);

    //useEffect(실행할 함수, 의존성 배열)
    //useEffect(실행할 함수{ return ()={clean up function}, 의존성 배열)
    useEffect(() => {
        console.log('useEffect [] 실행');
    }, [])  //의존성 배열 비어있음 -> 로딩(mount)

    useEffect(() => {
        console.log('useEffect 실행');
    });  //의존성 배열X -> 로딩(mount), 업데이트

    useEffect(() => {
        console.log('useEffect [orderCount] 실행');

        return () => {  //clean up function
            console.log("useEffect [orderCount] return 실행");
        };
    }, [orderCount]);

    useEffect(()=>{
        //2초후 smShow 값을 false 변경        
        let tmout = setTimeout(()=>{
            setSmShow(false); //true -> false
        }, 2000); //ms 시간이 지난 뒤에 함수 실행

        //setTimeout
        //setInterval
        //비동기 처리

        //clearTimeout
        //clearInterval
        return ()=>{
            clearTimeout(tmout);
        }

    }, [])

    const redTextStyle = {
        color: "red"
    };

    const blueTextStyle = {
        color: "blue"
    };

    const styles = {
        redStyle : {   //styles.redStyle
            color: "red"
        },
        blueStyle : {  //styles.blueStyle
            color:"blue"
        },
        fontBigBold : {  //styles.fontBigBold
            fontSize:"2rem",
            fontWeight:"bold"
        }
    };

    


    // detail/2   
    //       2 : index 
    // foods[index] 

    // let [cnt, setCnt] = useState(0);

    if (food == undefined || food == null) {
        return (
            <div><h1>잘못된 접근입니다.</h1></div>
        )
    }

    /*
        조건에 따라서 다른 스타일을 적용
        가격표시
            1만원 이상 -> 빨간색
            1만원 미만 -> 파란색

        1) js 객체

            const priceTextStyle = {
                color: food.price >= 10000 ? 'red' : 'blue'
            }
            
            <p style={priceTextStyle}>{food.price}</p>

            <p style={{color: food.price >= 10000 ? 'red' : 'blue'}}>{food.price}</p>

        2) js 함수 형태

            const priceTextStyleFunc = (price)=>{
                return color: price >= 10000 ? 'red' : 'blue';
            }

            <p style={ priceTextStyleFunc(food.price) }>{food.price}</p>
        
        3) css 클래스 연계 활용
            
            //단일
            <p className={food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>

            //여러개
            <p className={'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue')  }>{food.price}</p>

            //join 함수
            <p className={
                ['text-strong', food.price >= 10000 ? 'price-red' : 'price-blue'].join(" ")
            }>{food.price}</p>

            // 백틱 문자 활용
            <p className={`text-strong ${food.price >= 10000 ? 'price-red' : 'price-blue'}`}>{food.price}</p>

            // 변수 활용 (className 에 활용)
            const priceClass = food.price >= 10000 ? 'price-red' : 'price-blue';
    
        4) css class + useState + useEffect 효과 적용

            let [viewStatus, setViewStatus] = useState('');

            useEffect(()=>{
                setViewStatus('end');
            },[]);

            useEffect(()=>{
                setTimeout(()=>{setViewStatus('end');}, 300);
            },[]);

            <Container className={'start ' + viewStatus}>


    */
    const priceClass = food.price >= 10000 ? 'price-red' : 'price-blue';

    const priceTextStyle = {
        color: food.price >= 10000 ? 'red' : 'blue'
    }

    const priceTextStyleFunc = (price)=>{
        
        if(price >= 10000){
            return { color : 'red' };
        } else {
            return { color : 'blue' };
        }

        // return {
        //     color: price >= 10000 ? 'red' : 'blue'
        // }
    }


    return (
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p style={styles.blueStyle}>{food.content}</p>
                    <p className={'text-strong ' + priceClass}>{food.price}</p>
                    <p>+
                        <Button variant="dark" onClick={() => {
                            if (orderCount > 0)
                                setOrderCount(orderCount - 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1);
                        }}>+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                    {/* <button onClick={()=>{setCnt(cnt+1)}}>버튼</button> */}
                </Col>
            </Row>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        환영합니다~
                    </Modal.Title>
                </Modal.Header>
            </Modal>

        </Container>
    );
}

export default Detail;

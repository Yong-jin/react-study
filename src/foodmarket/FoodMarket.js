import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import banner_bg from './banner_bg.jpg';
import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';

import foodsData from '../data/foodsData.js';
import { useState } from 'react';
import FoodCard from './FoodCard.js';

function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">FoodDetail</Nav.Link>
                        <Nav.Link href="#pricing">Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 
                1. css 이미지 경로 
                
                2. js 에서는 import 후 사용
                <img src={banner_bg}/>

                3. public 폴더에 저장후 사용
                img src={'/food1.jpg'}
                img src={process.env.PUBLIC_URL + '/food1.jpg'}

                package.json
                "homepage":"/newurlpath"  상세경로
            */}
            <div className="main-bg" style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div>

            <Container>
                <Row>
                    {/* <FoodCard title={foods[0].title} content={foods[0].content} price={foods[0].price}/> */}

                    {
                        foods.map((food, index)=>{
                            return (<Col md={4} sm={2} key={index}><FoodCard food={food} index={index} foods={foods} /></Col>);
                        })
                    }

                    {/* <Col md={4} sm={2}><FoodCard food = {foods[0]}/></Col>
                    <Col md={4} sm={2}><FoodCard food = {foods[1]}/></Col>
                    <Col md={4} sm={2}><FoodCard food = {foods[2]}/></Col>                     */}
                </Row>
            </Container>


            {/*
            <Container>
                <Row>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food1.jpg'} />
                            <Card.Body>
                                <Card.Title>{foods[0].title}</Card.Title>
                                <Card.Text>{foods[0].content}</Card.Text>
                                <Card.Text>{foods[0].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food2.jpg'} />
                            <Card.Body>
                                <Card.Title>{foods[1].title}</Card.Title>
                                <Card.Text>{foods[1].content}</Card.Text>
                                <Card.Text>{foods[1].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col md={4} sm={8}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food3.jpg'} />
                            <Card.Body>
                                <Card.Title>{foods[2].title}</Card.Title>
                                <Card.Text>{foods[2].content}</Card.Text>
                                <Card.Text>{foods[2].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>*/}

        </div>
    );
}

export default FoodMarket;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FoodCard from '../components/FoodCard';
import banner_bg from '../image/banner_bg.jpg';

function Home( {foods} ) {
    return (
        <div>
            <div className="main-bg" style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div>
            {/* <div className="main-bg" style={{ backgroundImage: 'url(/image/banner_bg.jpg)' }}></div> */}

            <Container>
                <Row>
                    {/* <FoodCard title={foods[0].title} content={foods[0].content} price={foods[0].price}/> */}

                    {
                        foods.map((food, index) => {
                            return (<Col md={4} sm={2} key={index}><FoodCard food={food} index={index} foods={foods} /></Col>);
                        })
                    }

                    {/* <Col md={4} sm={2}><FoodCard food = {foods[0]}/></Col>
                            <Col md={4} sm={2}><FoodCard food = {foods[1]}/></Col>
                            <Col md={4} sm={2}><FoodCard food = {foods[2]}/></Col>                     */}
                </Row>
            </Container>
        </div>
    )
}

export default Home;
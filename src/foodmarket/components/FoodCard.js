
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

//function FoodCard(props) {      //props = {food:{title:'', price:'', content:'', id:''}
function FoodCard({ food, foods, index}) {

    let navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + food.imgPath} />
            <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>{food.content}</Card.Text>
                <Card.Text>{foods[index].price}</Card.Text>
                <Button variant="primary" onClick={()=>{
                    navigate('/detail/' + food.id );
                }}>상세보기</Button>
            </Card.Body>
        </Card>
    )
}

export default FoodCard;
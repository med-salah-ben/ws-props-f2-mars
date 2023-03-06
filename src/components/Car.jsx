import React from 'react';
import { Button , Card} from 'react-bootstrap';

const Car = ({car , PriceFunc}) => {
  return (
    <Card style={{ width: '18rem' , margin:"20px"}}>
    <Card.Img variant="top" src={car.carImg} />
    <Card.Body>
      <Card.Title> {car.title} </Card.Title>
      <Card.Text>
        {car.price}
      </Card.Text>
      <Button variant="primary" onClick={()=>PriceFunc(car.title , car.price)}>Buy it</Button>
    </Card.Body>
  </Card>
    )
}

export default Car
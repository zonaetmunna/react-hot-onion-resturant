import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Foods from '../Foods/Foods';

const Details = () => {
     const { id } = useParams()
     const history = useHistory()
     const [food, setFood] = useState({})
     useEffect(() => {
          fetch('/Breakfast.json' || '/lunch.json')
               .then(res => res.json())
               .then(data => setFood(data[0]))
     }, [])
     console.log(food)

     const handleAddToCart = () => {
          history.push("/cart")

     }
     return (
          <div>
               <Foods></Foods>



               <Container>
                    <Row className="justify-content-center align-items-center">
                         <Col sm={8} md={6} className="text-start p-5">
                              <h1>{food.name}</h1>
                              <p>{food.des}</p>
                              <h4 className="text-success"><i class="fas fa-dollar-sign"></i>{food.price}</h4>
                              <Button onClick={handleAddToCart} variant="danger" className="rounded-pill"><i class="fas fa-shopping-cart"></i> Add</Button>
                         </Col>
                         <Col sm={4} md={6}>
                              <img src={food.img} className="img-fluid shadow-lg rounded-circle" alt="" />
                         </Col>
                    </Row>
               </Container>





          </div>
     );
};

export default Details;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import Foods from '../Foods/Foods';

const Details = () => {
     const { id } = useParams()
     const [food, setFood] = useState({})
     useEffect(() => {
          fetch('/Breakfast.json' || '/lunch.json')
               .then(res => res.json())
               .then(data => setFood(data[0]))
     }, [])
     console.log(food)
     return (
          <div>
               <Foods></Foods>
               <h1>thi is food id {id}</h1>
               <Col>
                    <Card>
                         <Card.Img variant="top" className="w-50 mx-auto p-4" src={food.img} />
                         <Card.Body>
                              <Card.Title>{food.name}</Card.Title>
                              <Card.Text>
                                   {food.des}
                              </Card.Text>
                              <Card.Text>
                                   {food.price}
                              </Card.Text>
                              <button >add</button>
                         </Card.Body>
                    </Card>
               </Col>

          </div>
     );
};

export default Details;
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const BrekFood = ({ food }) => {
     const { id, name, des, price, img } = food;
     const history = useHistory()

     const handleDetails = () => {
          history.push(`/foods/${id}`)
     }


     return (
          <div>

               <Col className="m-3">
                    <Card className="shadow p-3 mb-5 bg-white rounded">
                         <Card.Img variant="top" className="w-50 mx-auto p-2 shadow rounded-circle" src={img} />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                   {des}
                              </Card.Text>
                              <Card.Text>
                                   {price}
                              </Card.Text>
                              <Button onClick={handleDetails} variant="light">Details</Button>

                         </Card.Body>
                    </Card>
               </Col>

          </div >
     );
};

export default BrekFood;
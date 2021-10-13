import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const LaunchFood = ({ food }) => {
     const { id, name, img, price, des } = food;
     const history = useHistory();

     const handleDetails = () => {
          history.push(`/foods/${id}`)
     }

     return (
          <div>

               <Col>
                    <Card>
                         <Card.Img variant="top" className="w-50 mx-auto p-4" src={img} />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                   {des}
                              </Card.Text>
                              <Card.Text>
                                   {price}
                              </Card.Text>
                              <button onClick={handleDetails}>Details</button>
                         </Card.Body>
                    </Card>
               </Col>

          </div>
     );
};

export default LaunchFood;
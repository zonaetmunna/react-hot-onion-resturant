import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../../Banner/Banner';
import Foods from '../Foods/Foods';
import LaunchFood from '../LaunchFood/LaunchFood';


const LaunchFoods = () => {
     const [foods, setFoods] = useState([])
     useEffect(() => {
          fetch('/lunch.json')
               .then(res => res.json())
               .then(data => setFoods(data))
     }, [])

     return (
          <div>
               <Banner></Banner>
               <Foods></Foods>
               <Row xs={1} md={3} className="g-4">
                    {
                         foods.map(food => <LaunchFood
                              food={food}
                         ></LaunchFood>)


                    }

               </Row>

          </div>
     );
};

export default LaunchFoods;
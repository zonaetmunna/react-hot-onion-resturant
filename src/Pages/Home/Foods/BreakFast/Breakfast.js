import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../../Banner/Banner';
import BrekFood from '../BrekFood/BrekFood';
import Foods from '../Foods/Foods';

const Breakfast = () => {
     const [foods, setFoods] = useState([]);
     useEffect(() => {
          fetch('/Breakfast.json')
               .then(res => res.json())
               .then(data => setFoods(data))
     }, [])

     return (
          <div>
               <Banner></Banner>
               <Foods></Foods>

               <Row xs={1} md={3} className="g-4">
                    {
                         foods.map(food => <BrekFood
                              food={food}
                         ></BrekFood>)
                    }

               </Row>

          </div>
     );
};

export default Breakfast;
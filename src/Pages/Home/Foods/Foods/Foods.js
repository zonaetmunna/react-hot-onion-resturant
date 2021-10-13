import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Breakfast from '../BreakFast/Breakfast';

const Foods = () => {
     return (
          <div>

               <NavLink to="/breakfast">BreakFast</NavLink>
               <NavLink to="/launch">Launch</NavLink>
               <NavLink to="/diner">Diner</NavLink>

          </div>
     );
};

export default Foods;
import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Breakfast from '../Foods/BreakFast/Breakfast';
import Foods from '../Foods/Foods/Foods';


const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Foods></Foods>
               <Breakfast></Breakfast>
               <Footer></Footer>


          </div>
     );
};

export default Home;
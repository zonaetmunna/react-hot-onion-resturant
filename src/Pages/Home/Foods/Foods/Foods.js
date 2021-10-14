import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';




const Foods = () => {
     return (
          <div className="mt-5">
               <Nav.Link as={HashLink} to="/home#breakfast" className="text-success fw-bold">BreakFast</Nav.Link>
          </div>
     );
};

export default Foods;
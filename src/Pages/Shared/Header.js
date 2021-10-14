import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo2.png';

const Header = () => {
     const { user, logOut } = useAuth();

     return (
          <div>
               <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" >
                    <Container>
                         <Navbar.Brand as={Link} to="/home">
                              <img
                                   src={logo}
                                   width="200"
                                   height="50"
                                   className="d-inline-block align-top"
                                   alt="React Bootstrap logo"
                              />
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                              </Nav>
                              <Nav>
                                   <Nav.Link as={Link} to="/cart"><i class="fas fa-shopping-cart"></i></Nav.Link>
                              </Nav>
                              <Nav>
                                   {user.email ? <Button onClick={logOut}>Logout</Button> : <Nav.Link as={Link} to="/login" className="fw-bold">Login</Nav.Link>}
                              </Nav>
                              {user.email && <Navbar.Text className="fw-bold">
                                   Signed in as: {user.displayName}
                              </Navbar.Text>}


                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div >
     );
};

export default Header;
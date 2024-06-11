import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/Slices/User'; 

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Navbar expand="lg" style={{ marginRight :"250px" ,backgroundColor: 'rgb(0, 112, 205)' }} variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand >
            <img  src='NavBarImages/vezeeta.png' alt="Vezeeta Logo" width="160" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
          <LinkContainer style={{marginLeft :"720px"}} to="/ForDoc" activeClassName="active">
              <Nav.Link>VezeetaForDoctors</Nav.Link>
            </LinkContainer>
            <Nav.Link href="https://www.vezeeta.com/en/Generic/ContactUs">ContactUs</Nav.Link>
            <LinkContainer to="/" activeClassName="active">
              <Nav.Link>English</Nav.Link>
            </LinkContainer>
            {!user ? (
              <>
                <LinkContainer  to="/signUp" activeClassName="active">
                  <Nav.Link>SignUp</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login" activeClassName="active">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer  to="/Profile" activeClassName="active">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/appointments" activeClassName="active">
                  <Nav.Link>Appointments</Nav.Link>
                </LinkContainer>  
                <LinkContainer  to="/" activeClassName="active">
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </LinkContainer>

                
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


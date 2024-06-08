import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/images/vezeeta.png'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" bg='rgb(0, 112, 205)' variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt="Vezeeta Logo" width="160" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <LinkContainer to="/signUp" activeClassName="active">
              <Nav.Link style={{ marginLeft: '19cm' }}>SignUp</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login" activeClassName="active">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/ForDoc" activeClassName="active">
              <Nav.Link>VezeetaForDoctors</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/ContactUs" activeClassName="active">
              <Nav.Link>ContactUs</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#">عربي</Nav.Link>
            <Nav.Link href="#">English</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

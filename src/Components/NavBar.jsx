// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const NavBar = () => {
//   const favoriteCount = useSelector(state => state.movies.favorites.length);

//   return (
//     <div style={{ backgroundColor: "yellowgreen", display: "flex", justifyContent: "space-around", padding: 5 }}>
//       <Link to="/">Movies Page</Link>
//       <Link to="/addMovie">Add Movie</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contactUs">Contact Us</Link>
//       <Link to="/favorites">Favorites Page</Link>
//       <div>Favorites: {favoriteCount}</div>
//     </div>
//   );
// };

// export default NavBar;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { useLocation } from 'react-router-dom';
import logo from '../assets/images/vezeeta.png'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
const NavBar = () => {
  // const location = useLocation();

  return (
    <Navbar expand="lg" bg="primary" variant="dark">
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
            {/* <LinkContainer to="/login" activeClassName="active">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ForDoc" activeClassName="active">
              <Nav.Link>VezeetaForDoctors</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ContactUs" activeClassName="active">
              <Nav.Link>ContactUs</Nav.Link>
            </LinkContainer> */}
            <Nav.Link href="#">عربي</Nav.Link>
            <Nav.Link href="#">English</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

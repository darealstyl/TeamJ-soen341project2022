import React from 'react';
import { NavDropdown, Navbar, Nav, Container, Row } from 'react-bootstrap'
import logo from '../logo.png'; // Tell webpack this JS file uses this image

function Header() {
  return(
      <header>


<Navbar className="navTheme" variant="dark" expand="lg" collapseOnSelect> 
  <Container>
    <Navbar.Brand href="/">
        {/* In My Shop */}
        <img className="logo" src={logo} alt="Logo" />
    
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/browse">Browse</Nav.Link>
        <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>
        <NavDropdown title="Manage Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/manage_account">My Account</NavDropdown.Item>
          <NavDropdown.Item href="/seller_account">Seller Profile</NavDropdown.Item>
          <NavDropdown.Item href="/consumer_account">Consumer Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/admin">Settings</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/cart"> <i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    
      </header>
  ) 
}

export default Header;

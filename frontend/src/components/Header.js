import React from "react";
import { NavDropdown, Navbar, Nav, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.png"; // Tell webpack this JS file uses this image

function Header() {
 return (
    <header>
      <Navbar className="navTheme" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
              <Navbar.Brand>
                  {/* In My Shop */}
                  <img className="logo" src={logo} alt="Logo" />
              </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"> {/*aligned to left side of navbar*/}
                  <LinkContainer to="/browse">
                      <Nav.Link>Browse</Nav.Link>
                  </LinkContainer>                  
              </Nav>
              <Nav className="ms-auto"> {/*aligned to right side of navbar*/}
                  <LinkContainer to="/sign-in">
                      <Nav.Link>
                        <i className="fas fa-user"></i> Sign In
                      </Nav.Link>
                  </LinkContainer>
                  <NavDropdown title="Manage Account" id="basic-nav-dropdown">
                      <LinkContainer to="/user-profile">
                          <NavDropdown.Item>My Account</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orders">
                        <NavDropdown.Item>My Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/seller-profile">
                          <NavDropdown.Item>Seller Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/admin">
                          <NavDropdown.Item>Settings</NavDropdown.Item>
                      </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to="/cart">
                      <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                  </LinkContainer>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

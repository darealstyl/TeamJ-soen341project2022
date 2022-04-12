import React from "react";
import { NavDropdown, Navbar, Nav, Container, Row, Badge } from "react-bootstrap";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from './SearchBox'
import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import logo from "../logo.png"; // Tell webpack this JS file uses this image
import { USER_LOGIN_SUCCESS } from "../constants/userConstants";

function Header() {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  // check if user is Seller
  const userSeller = useSelector((state) => state.userSeller);

  const cartItems = useSelector((state) => state.cart.cartItems)

  let quantity = 0

  cartItems.forEach(product => {
    quantity += parseInt(product.qty)
  });


  let navigate = useNavigate();

  

  const goHome = () => {
   navigate("/");
  };

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    goHome();
  };
  const switchUserMode = async () => {
    try {
      const work_mode = !userInfo.work_mode;
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        "/api/users/updateusermode/",
        work_mode,
        config
      );
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log("error updating the user mode!");
    }
  };

  console.log("userInfo : ", userInfo);
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
              <SearchBox />
              <Nav className="ms-auto"> {/*aligned to right side of navbar*/}
              {/* {userInfo.isSeller} */}
              {userInfo ? (
                  <LinkContainer to="/user-profile">
                    <p className="username_title"> {userInfo.name} </p> 
                  </LinkContainer>
                  ) : (
                  <LinkContainer to="/sign-in">
                      <Nav.Link>
                        <i className="fas fa-user"></i> Sign In
                      </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo ? (
                  <NavDropdown title="Manage Account" id="basic-nav-dropdown">
                    {userInfo.isSeller ? ("") : (
                      <LinkContainer to="/profile">
                          <NavDropdown.Item>My Account</NavDropdown.Item>
                      </LinkContainer>
                      )}
                      <LinkContainer to="/orders">
                        <NavDropdown.Item>My Orders</NavDropdown.Item>
                      </LinkContainer>
                      {userInfo.isSeller ? (
                      <LinkContainer to="/seller/profile">
                          <NavDropdown.Item>Seller Profile</NavDropdown.Item>
                      </LinkContainer>
                                            ) : (""
                      )}
                      {userInfo.isSeller ? (
                      <LinkContainer to="/seller/product-list">
                          <NavDropdown.Item>Product List</NavDropdown.Item>
                      </LinkContainer>
                      ) : (""
                      )}
                      <NavDropdown.Divider />
                      <LinkContainer to="/admin">
                          <NavDropdown.Item>Settings</NavDropdown.Item>
                      </LinkContainer>
                      
                      <NavDropdown.Item onClick={logoutHandler}>
                          <span>Logout</span>
                      </NavDropdown.Item> 
                      
                  </NavDropdown>
                ) : ("")}
                  <LinkContainer to="/cart">
                        <Nav.Link>
                          <i className="fas fa-shopping-cart"></i>
                          <span> Cart</span>  
                          <sup>
                            <Badge style={{marginLeft: 5}} id="cartBadge" pill bg="light" text="dark">  {quantity}</Badge>  
                          </sup>
                        </Nav.Link>
                  </LinkContainer>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

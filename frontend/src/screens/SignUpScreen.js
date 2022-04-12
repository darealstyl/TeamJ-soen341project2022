import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpScreen = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSeller, setIsSeller] = useState(false);

  //const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  

  const dispatch = useDispatch(); 
  let navigate = useNavigate();
  let { slug } = useParams();
  //const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      navigate('/user-profile')
    }
  }, [navigate, userInfo]);

  const redirect ="/";

  const onclick_password = () => {
    document.getElementById("password_error").innerHTML ="";
    return true;
  }

    const validate_password = (password) => {
      if (password.length < 9){
          // dispatch({
          //     type: AUTH_PASSWORD_VALIDATORS,
          // })
          console.log("password is too short");
          document.getElementById("password_error").innerHTML ="Password is too short";
          return true;
      }
  }

  const check_password_capital = (password) => {
    if (!password.match(/[A-Z]/)){
        // dispatch({
        //     type: AUTH_PASSWORD_VALIDATORS,
        // })
        console.log("Password should have at least 1 capital letter");
        document.getElementById("password_error").innerHTML ="Password should have at least 1 capital letter";
        setMessage("Password should have at least 1 capital letter");
        return true;
    }
}

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    }else if(validate_password(password)){

      setMessage("Passwords is too short");

    }else if(check_password_capital(password)){

      setMessage("Password should have at least 1 capital letter");


    } else {
      const username = email;

      // console.log("name:", name);
      // console.log("email:", email);
      // console.log("username:", username);
      // console.log("password:", password);
      dispatch(register(name, email, password, isSeller));
    }
  }

  return (
    <FormContainer>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <h1>Sign Up</h1>
            </Col>
        </Row>
        <Row>
            <Col md={3}>{/* empty column for spacing */}</Col>
            <Col md={6}>
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="first-name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="last-name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" /*value={} onChange={}*/></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row><br/>
                    <FormGroup controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </FormGroup><br/>
                    <FormGroup controlId="password">
                        <Form.Label>Password <span id="password_error"></span> </Form.Label>
                        <Form.Control type="password" placeholder="••••••••" value={password} onClick={(e) => onclick_password()} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId="confirm-password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                    </FormGroup><br/>

                    <FormGroup controlId="isSeller">
                        <Form.Label>Account Type</Form.Label>
                        <Form.Control as="select" value={isSeller} onChange={(e) => setIsSeller(e.target.value)}>
                            <option value="">Select Account Type</option>
                            <option value="false">Buyer</option>
                            <option value="true">Seller</option>
                            {/* <option value="admin">Admin</option> */}
                            
                        </Form.Control><br/>

                    </FormGroup>
                    
                    <Button type="submit" variant="secondary">Sign Up</Button>
                </Form>
            </Col>
            <Col md={3}>{/* empty column for spacing */}</Col>
        </Row>
              <Row className="py-3">
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/sign-in?redirect=${redirect}` : "/sign-in"}>
            Sign In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default SignUpScreen;

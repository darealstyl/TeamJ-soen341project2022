import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { register } from "../actions/userActions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserDetails, updateUserProfile} from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

function ProfileScreen({ history }) {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSeller, setIsSeller] = useState(false);

  //const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  

  const dispatch = useDispatch(); 
  let navigate = useNavigate();
  let { slug } = useParams();
  //const redirect = location.search ? location.search.split("=")[1] : "/";
  
  
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    else {
        if(!user || !user.name || success){
            dispatch({type:USER_UPDATE_PROFILE_RESET})
            dispatch(getUserDetails('profile'))
        }
        else{
            setName(user.name)
            setEmail(user.email)
        }
    }
  }, [dispatch, navigate, userInfo, user, success]);

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
    }
    else {
        
        dispatch(updateUserProfile({
            'id':user._id,
            'name':name,
            'email':email,
            'password':password
        }))
    }
  }
  
    return (
    <Row>
        <Col md={3}>
                <h2>User Profile</h2>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update
                </Button>

                </Form>
        </Col>
        <Col md={9}>
                <h2>My Orders</h2>
        </Col>
    </Row>
  )
}

export default ProfileScreen
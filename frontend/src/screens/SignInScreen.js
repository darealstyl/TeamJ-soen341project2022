import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  let navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
let { slug } = useParams();
  //const redirect = location.search ? location.search.split('=')[1] : '/'
const redirect ="/";
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          {/* <Link to={redirect ? `/sign-up?redirect=${redirect}` : '/sign-up'}>
            sign-up
          </Link> */}
             <Link to={`/sign-up`}>
            Sign-up
          </Link>
        </Col>
      </Row>

      <Row className='py-3'>
        <Col>
          Admin?{' '}
          {/* <Link to={redirect ? `/sign-up?redirect=${redirect}` : '/sign-up'}>
            sign-up
          </Link> */}
              {/*<Link to={`http://127.0.0.1:8000/admin/login/?next=/admin/`}>
            Login
          </Link>*/}
             
             <a href="http://127.0.0.1:8000/admin/login/?next=/admin/" > Login </a>

        </Col>
      </Row>

    </FormContainer>

    
  )
}

export default SignIn;

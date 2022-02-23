import React from 'react'
import { useState } from "react";
import { Row, Col, Form, FormGroup, Button } from 'react-bootstrap'

import accounts from '../accounts'

function UserProfileScreen() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        // inputs.values.forEach(((e) => console.log(e)));
        accounts[0].first_name = 'name';

        console.log(inputs['first_name']);
      }




  return (
    <div>
        <Row>
            <Col md={8}>
                <h1>User Profile</h1>
                <Form onSubmit={handleSubmit}>
                    <h4>Personal Info</h4>
                    <Row>
                        <Col md={6}>
                            <FormGroup controlId='first-name'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' name='first_name' placeholder='First Name' defaultValue={accounts[0].first_name} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId='last-name'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' name='last_name' placeholder='Last Name' defaultValue={accounts[0].last_name} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' name='email' placeholder='example@email.com' defaultValue={accounts[0].email} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder='••••••••' defaultValue={accounts[0].password} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='confirm-password'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' name='confirm-password' placeholder='••••••••' defaultValue={accounts[0].password} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <Button type='submit' variant='secondary'>
                        Update
                    </Button>
                </Form>
                <Form onSubmit={handleSubmit}>
                    <h4>Shipping Address</h4>
                    <FormGroup controlId='address'>
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control type='text' name='address' placeholder='' defaultValue={accounts[0].address} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='city'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' name='city' placeholder='' defaultValue={accounts[0].city} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='province'>
                        <Form.Label>Province</Form.Label>
                        <Form.Control type='text' name='province' placeholder='' defaultValue={accounts[0].province} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='postal-code'>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type='text' name='postal_code' placeholder='' defaultValue={accounts[0].postal_code} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='country'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type='text' name='country' placeholder='' defaultValue={accounts[0].country} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <Button type='submit' variant='secondary'>
                        Update
                    </Button>
                </Form>
                <Form onSubmit={handleSubmit}>
                    <h4>Payment Information</h4>
                    <FormGroup controlId='card-number'>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type='text' name='card#' placeholder='1234567890123456' defaultValue={accounts[0]['card#']} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <Row>
                        <Col md={9}>
                            <FormGroup controlId='expiration-date'>
                                <Form.Label>Expiration Date</Form.Label>
                                <Form.Control type='text' name='expiration' placeholder='mm/yy' defaultValue={accounts[0].expiration} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup controlId='ccv'>
                                <Form.Label>CCV</Form.Label>
                                <Form.Control type='password' name='ccv' placeholder='•••' defaultValue={accounts[0].ccv} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId='check'>
                        <Form.Check label="Billing address is the same as shipping address"/>
                    </FormGroup>
                    <Button type='submit' variant='secondary'>Update</Button>
                </Form>
            </Col>
            <Col md={1}></Col>
            <Col md={3}>
                <h1>Orders</h1>
                {/* List of customer's previous orders will go here*/}    
            </Col>
        </Row>
        </div>
    )
}

// updateInfo1()
// {

// }


export default UserProfileScreen;

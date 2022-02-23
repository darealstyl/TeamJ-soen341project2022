import React from 'react'
import { useState } from "react";
import { Row, Col, Form, FormGroup, Button } from 'react-bootstrap'

import accounts from '../accounts'

function UserProfileScreen() {

    /*  
        if loading page for the first time, i.e. no account info saved in local storage, 
        load account information from accounts.js to local storage 
    */
    if (!(localStorage.getItem("email"))) {
        Object.keys(accounts[0]).forEach(key => {
            // console.log(accounts[0][key]);
            localStorage.setItem(key, accounts[0][key]);
        });
    }

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
        event.preventDefault();

        Object.keys(inputs).forEach(key => {
            // console.log(inputs[key]);
            localStorage.setItem(key, inputs[key]);
        });
        
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
                                <Form.Control type='text' name='first_name' placeholder='First Name' defaultValue={localStorage.getItem("first_name")} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId='last-name'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' name='last_name' placeholder='Last Name' defaultValue={localStorage.getItem("last_name")} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' name='email' placeholder='example@email.com' defaultValue={localStorage.getItem("email")} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder='••••••••' defaultValue={localStorage.getItem("password")} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='confirm-password'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' name='confirm-password' placeholder='••••••••' defaultValue={localStorage.getItem("password")} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <h4>Shipping Address</h4>
                    <FormGroup controlId='address'>
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control type='text' name='address' placeholder='' defaultValue={localStorage.getItem("address")} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='city'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' name='city' placeholder='' defaultValue={localStorage.getItem("city")} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='province'>
                        <Form.Label>Province</Form.Label>
                        <Form.Control type='text' name='province' placeholder='' defaultValue={localStorage.getItem("province")} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='postal-code'>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type='text' name='postal_code' placeholder='' defaultValue={localStorage.getItem("postal_code")} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='country'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type='text' name='country' placeholder='' defaultValue={localStorage.getItem("country")} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <h4>Payment Information</h4>
                    <FormGroup controlId='card-number'>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type='text' name='card_number' placeholder='1234567890123456' defaultValue={localStorage.getItem("card_number")} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <Row>
                        <Col md={9}>
                            <FormGroup controlId='expiration-date'>
                                <Form.Label>Expiration Date</Form.Label>
                                <Form.Control type='text' name='expiration' placeholder='mm/yy' defaultValue={localStorage.getItem("expiration")} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup controlId='ccv'>
                                <Form.Label>CCV</Form.Label>
                                <Form.Control type='password' name='ccv' placeholder='•••' defaultValue={localStorage.getItem("ccv")} onChange={handleChange}></Form.Control>
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

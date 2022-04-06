import React from 'react'
import { useState } from "react";
import { Row, Col, Form, FormGroup, Button } from 'react-bootstrap'

function SellerProfileScreen() {

    /*  
        for now the form is a copy of the User Profile page
    */
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
        event.preventDefault();
      }

  return (
    <div>
        <Row>
            <Col md={8}>
                <h1>Seller Profile</h1>
                <Form onSubmit={handleSubmit}>
                    <h4>Personal Info</h4>
                    <Row>
                        <Col md={6}>
                            <FormGroup controlId='first-name'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' name='first_name' placeholder='First Name' defaultValue={""} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId='last-name'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' name='last_name' placeholder='Last Name' defaultValue={""} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' name='email' placeholder='example@email.com' defaultValue={""} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder='••••••••' defaultValue={""} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='confirm-password'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' name='confirm-password' placeholder='••••••••' defaultValue={""} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <h4>Shipping Address</h4>
                    <FormGroup controlId='address'>
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control type='text' name='address' placeholder='' defaultValue={""} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='city'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' name='city' placeholder='' defaultValue={""} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='province'>
                        <Form.Label>Province</Form.Label>
                        <Form.Control type='text' name='province' placeholder='' defaultValue={""} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='postal-code'>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type='text' name='postal_code' placeholder='' defaultValue={""} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='country'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type='text' name='country' placeholder='' defaultValue={""} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <h4>Payment Information</h4>
                    <FormGroup controlId='card-number'>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type='text' name='card_number' placeholder='1234567890123456' defaultValue={""} onChange={handleChange}></Form.Control>
                    </FormGroup>
                    <Row>
                        <Col md={9}>
                            <FormGroup controlId='expiration-date'>
                                <Form.Label>Expiration Date</Form.Label>
                                <Form.Control type='text' name='expiration' placeholder='mm/yy' defaultValue={""} onChange={handleChange}></Form.Control>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup controlId='ccv'>
                                <Form.Label>CCV</Form.Label>
                                <Form.Control type='password' name='ccv' placeholder='•••' defaultValue={""} onChange={handleChange}></Form.Control>
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

export default SellerProfileScreen;

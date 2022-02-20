import React from 'react'
import { Row, Col, Form, FormGroup, Button } from 'react-bootstrap'

function UserProfileScreen() {
  return (
    <div>
        <Row>
            <Col md={8}>
                <h1>User Profile</h1>
                <Form /*onSubmit={}*/>
                    <h4>Personal Info</h4>
                    <Row>
                        <Col md={6}>
                            <FormGroup controlId='first-name'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' placeholder='First Name' /*value={} onChange={}*/></Form.Control>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId='last-name'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' placeholder='Last Name' /*value={} onChange={}*/></Form.Control>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='example@email.com' /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='••••••••' /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='confirm-password'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' placeholder='••••••••' /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <Button type='submit' variant='secondary'>
                        Update
                    </Button>
                </Form>
                <Form /*onSubmit={}*/>
                    <h4>Shipping Address</h4>
                    <FormGroup controlId='address'>
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control type='text' placeholder='' /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='city'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' placeholder='' /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='province'>
                        <Form.Label>Province</Form.Label>
                        <Form.Control type='text' placeholder='' /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='postal-code'>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type='text' placeholder='' /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <FormGroup controlId='country'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type='text' placeholder='' /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <Button type='submit' variant='secondary'>
                        Update
                    </Button>
                </Form>
                <Form /*onSubmit={}*/>
                    <h4>Payment Information</h4>
                    <FormGroup controlId='card-number'>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type='text' placeholder='1234567890123456' /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <Row>
                        <Col md={9}>
                            <FormGroup controlId='expiration-date'>
                                <Form.Label>Expiration Date</Form.Label>
                                <Form.Control type='text' placeholder='mm/yy' /*value={} onChange={}*/></Form.Control>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup controlId='ccv'>
                                <Form.Label>CCV</Form.Label>
                                <Form.Control type='password' placeholder='•••' /*value={} onChange={}*/></Form.Control>
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

export default UserProfileScreen;

import React from "react";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";

function SignUp() {
  return (
    <div>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <h1>Sign Up</h1>
            </Col>
        </Row>
        <Row>
            <Col md={3}>{/* empty column for spacing */}</Col>
            <Col md={6}>
                <Form /*onSubmit={}*/>
                    <Row>
                        <Col md={6}>
                            <FormGroup controlId="first-name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" /*value={} onChange={}*/></Form.Control>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="last-name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" /*value={} onChange={}*/></Form.Control>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="example@email.com" /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="••••••••" /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <FormGroup controlId="confirm-password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="••••••••" /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <Button type="submit" variant="secondary">Sign Up</Button>
                </Form>
            </Col>
            <Col md={3}>{/* empty column for spacing */}</Col>
        </Row>
    </div>
  );
}

export default SignUp;

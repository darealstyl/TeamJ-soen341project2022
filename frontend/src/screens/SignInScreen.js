import React from "react";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <h1>Sign In</h1>
            </Col>
        </Row>
        <Row>
            <Col md={3}>{/* empty column for spacing */}</Col>
            <Col md={6}>
                <Form /*onSubmit={}*/>
                    <FormGroup controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="example@email.com" /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="••••••••" /*value={} onChange={}*/></Form.Control>
                    </FormGroup>
                    <Button type="submit" variant="secondary">Sign In</Button>
                </Form>
                <div>
                    Don't have an account yet? <Link to="/sign-up">Sign up here.</Link>     
                </div>
            </Col>
            <Col md={3}>{/* empty column for spacing */}</Col>
        </Row>
    </div>
  );
}

export default SignIn;

import React from 'react'
import { useState } from "react";
import { Row, Col, Form, FormGroup, Button, Image, Container, InputGroup } from 'react-bootstrap'

function ProductEditScreen() {

    /*  
        for now the form is a copy of the User Profile page
    */
    const [inputs, setInputs] = useState({})

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
        //Update product
        event.preventDefault();
      }

    const uploadFileHandler = async (event) => {
        //Upload image file
        console.log("file is uploading")
    }

  return (
    <div>
        <Row>
            <h1>Add/Edit Product</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormGroup controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' name='name' placeholder='Enter product name' defaultValue={name} onChange={handleChange}></Form.Control>
                        </FormGroup>
                        <FormGroup controlId='price'>
                            <Form.Label>Price</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id='basic-addon1'>$</InputGroup.Text>
                                <Form.Control type='number' name='price' placeholder='Enter product price' defaultValue={price} onChange={handleChange}></Form.Control>
                            </InputGroup>
                            
                        </FormGroup>
                        <FormGroup controlId='brand'>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control type='text' name='brand' placeholder='Enter brand name' defaultValue={brand} onChange={handleChange}></Form.Control>
                            
                        </FormGroup>
                        <FormGroup controlId='countInStock'>
                            <Form.Label>Quantity In Stock</Form.Label>
                            <Form.Control type='number' name='countInStock' placeholder='Enter product stock' defaultValue={countInStock} onChange={handleChange}></Form.Control>
                        </FormGroup>
                        <FormGroup controlId='category'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type='text' name='category' placeholder='Enter product category' defaultValue={category} onChange={handleChange}></Form.Control>
                        </FormGroup>
                        <FormGroup controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as='textarea' rows='5' name='description' placeholder='Enter product description' defaultValue={description} onChange={handleChange}></Form.Control>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Container fluid='true' style={{display:'flex', border:'1px solid lightgray'}} className="justify-content-center">
                                <Image width='300' src={image}/>
                            </Container>
                            <Form.Control plaintext readOnly type='text' placeholder='Image path' defaultValue={image} onChange={handleChange}></Form.Control>
                            <Form.Control type='file' name='image' placeholder='Enter product image' onChange={uploadFileHandler}></Form.Control>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className='my-3'>
                        <Button type='submit' variant='secondary'>Update</Button>
                    </Col>
                </Row>
            </Form>
            
            
            
        
            
        </Row>
        </div>
    )
}

export default ProductEditScreen;

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Form, FormGroup, Button, Image, Container, InputGroup } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

function ProductEditScreen({ history }) {

    const productId = useParams().id;
    let navigate = useNavigate();

    // const [inputs, setInputs] = useState({})

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate

    useEffect(() => {

        if (successUpdate) {
            dispatch({type: PRODUCT_UPDATE_RESET})
            navigate(-1)
        } else {
            if (!product.name || product._id !== Number(productId)) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCountInStock(product.countInStock)
                setCategory(product.category)
                setDescription(product.description)
                // setUploading()
            }
        }
    }, [dispatch, product, productId, history, successUpdate])

    const handleSubmit = (e) => {
        //Update product
        e.preventDefault();
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description
        }))
      }

    const uploadFileHandler = async (e) => {
        console.log("file is uploading")
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('product_id', productId)

        setUploading(true)

        try {
            const config = {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }
            
            const {data} = await axios.post('/api/products/upload/', formData, config)
            
            setImage(data)
            setUploading(false)

        } catch(error) {
            setUploading(false)
        }
    }

  return (
    <div>
        <Button onClick={() => {navigate(-1)}}>Go Back</Button>
        <Row>
            <h1>Add/Edit Product</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{error}</Message>}

            {loading ? <Loader /> : error? <Message variant='danger'>{error}</Message> 
                : (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <FormGroup controlId='name'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text' name='name' placeholder='Enter product name' defaultValue={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                                </FormGroup>
                                <FormGroup controlId='price'>
                                    <Form.Label>Price</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text id='basic-addon1'>$</InputGroup.Text>
                                        <Form.Control type='number' name='price' placeholder='Enter product price' defaultValue={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
                                    </InputGroup>
                                    
                                </FormGroup>
                                <FormGroup controlId='brand'>
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control type='text' name='brand' placeholder='Enter brand name' defaultValue={brand} onChange={(e) => setBrand(e.target.value)}></Form.Control>
                                    
                                </FormGroup>
                                <FormGroup controlId='countInStock'>
                                    <Form.Label>Quantity In Stock</Form.Label>
                                    <Form.Control type='number' name='countInStock' placeholder='Enter product stock' defaultValue={countInStock} onChange={(e) => setCountInStock(e.target.value)}></Form.Control>
                                </FormGroup>
                                <FormGroup controlId='category'>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type='text' name='category' placeholder='Enter product category' defaultValue={category} onChange={(e) => setCategory(e.target.value)}></Form.Control>
                                </FormGroup>
                                <FormGroup controlId='description'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as='textarea' rows='5' name='description' placeholder='Enter product description' defaultValue={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup controlId='image'>
                                    <Form.Label>Image</Form.Label>
                                    <Container fluid='true' style={{display:'flex', border:'1px solid lightgray'}} className="justify-content-center">
                                        <Image width='300' src={image}/>
                                    </Container>
                                    <Form.Control plaintext readOnly type='text' placeholder='Image path' defaultValue={image} onChange={(e) => setImage(e.target.value)}></Form.Control>
                                    <Form.Control type='file' name='image' placeholder='Enter product image' onChange={uploadFileHandler}></Form.Control>
                                    {uploading && <Loader />}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='my-3'>
                                <Button type='submit' variant='secondary'>Update</Button>
                            </Col>
                        </Row>
                    </Form>
                )}

            
              
        </Row>
        </div>
    )
}

export default ProductEditScreen;

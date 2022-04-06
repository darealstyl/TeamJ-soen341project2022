// Please not the provided example page is just provided to showcase how a page can be added and created with React for the  rest of the team and will not be used (HomeScreen.js) specifically the product tab.

// The json format was taken from:
// https://concordia.udemy.com/course/django-with-react-an-ecommerce-website/learn/lecture/24573288#overview


import React, { useState, useEffect } from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'



function BrowsingScreen() {

  const dispatch = useDispatch() 
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList 

  useEffect(()=> {
    dispatch(listProducts())

  }, [dispatch])

  return (
  <div>
      <h3>Trending Products </h3>
      {loading ? <Loader /> 
          : error ? <Message variant='danger'>{error}</Message>
          : <div>
              <Row>
                <Col xs lg="1">
                  <Button className="previous_button items_button"> <i className="fa fa-chevron-left"></i> </Button>
                </Col>
                  {products.slice(0, 3).map(product => (
                    
                      <Col ClassName="single_product" key={product._id} sm={10} md={6} lg={3} xl={3}>
                        <div >
                          <Product product={product} />
                        </div>
                      </Col>
                  ))}
                  <Col xs lg="2"> 
                    <Button className="next_button items_button"> <i className="fa fa-chevron-right"></i> </Button>
                  </Col>
              </Row>
              <br></br>
              <h3>Explore more products</h3>
                    <Row>
      
      
                  {products.slice(2, 10).map(product => (
      
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
      
                        <Product product={product} />
      
                      </Col>
                  ))}
              </Row>
            </div>
      }
      
      
  </div>
    )
}

export default BrowsingScreen;

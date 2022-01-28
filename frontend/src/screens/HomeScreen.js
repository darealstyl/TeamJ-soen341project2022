// Please not the provided example page is just provided to showcase how a page can be added and created with React for the  rest of the team and will not be used (HomeScreen.js) specifically the product tab.

// The json format was taken from:
// https://concordia.udemy.com/course/django-with-react-an-ecommerce-website/learn/lecture/24573288#overview


import React from 'react'
import {Row, Col} from 'react-bootstrap'

import Product from '../components/Product'

import products from '../products'



function HomeScreen() {
  return (
  <div>
      <h3>Trending Products </h3>
      <Row>
          {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

                <Product product={product} />

              </Col>
          ))}
      </Row>
  </div>
    )
}

export default HomeScreen;

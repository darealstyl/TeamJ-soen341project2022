// Please not the provided example page is just provided to showcase how a page can be added and created with React for the  rest of the team and will not be used (HomeScreen.js) specifically the product tab.

// The json format was taken from:
// https://concordia.udemy.com/course/django-with-react-an-ecommerce-website/learn/lecture/24573288#overview


import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'

import Product from '../components/Product'

import products from '../products'



function BrowsingScreen() {
  return (
  <div>
      <h3>Trending Products </h3>
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
      <h3>Explore more articles</h3>
            <Row>

          {products.slice(2, 6).map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

                <Product product={product} />

              </Col>
          ))}

          {products.slice(1, 5).map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

                <Product product={product} />

              </Col>
          ))}

      </Row>
  </div>
    )
}

export default BrowsingScreen;

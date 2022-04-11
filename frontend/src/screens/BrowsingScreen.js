
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Button} from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import {listProducts} from '../actions/productActions'

function BrowsingScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages } = productList

  let keyword = useLocation().search

  useEffect(() => {
      dispatch(listProducts(keyword))
  },[dispatch, keyword])

  return (
  <div>
      <h3>Trending Products </h3>
      {loading ? <Loader />
        : error ? <Message variant={'danger'}> {error} </Message>
        :
        <div>
            <Row>
                <Col xs lg="1">
                  <Button className="previous_button items_button"> <i className="fa fa-chevron-left"></i> </Button>
                </Col>

                  {products.slice(0, 3).map(product => (
                    
                      <Col key={product._id} sm={10} md={6} lg={3} xl={3}>
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
      
      
                  {products.slice(3, products.length).map(product => (
      
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
      
                        <Product product={product} />
      
                      </Col>
                  ))}
              </Row>
        <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      }
  </div>
    )
}

export default BrowsingScreen;


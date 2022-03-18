import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const createProductHandler = (product) => {
    //create product
}

function ProductListScreen() {
  return (
    <div>
        <Row className='align-items-center'>
            <Col md='8'>
                <h1>Product List</h1>
            </Col>
            <Col md='1'>{/* Empty column for spacing */}</Col>
            <Col md='3'>
                <LinkContainer to='/seller/product/:id/edit'>
                    <Button variant='secondary' /*onclick={createProductHandler}*/>
                        <i className='fas fa-plus'></i> Add Product
                    </Button>
                </LinkContainer>
                
            </Col>
        </Row>
        <Row>
            {/* Product list will go here */}
        </Row>
      
    </div>
  )
}

export default ProductListScreen

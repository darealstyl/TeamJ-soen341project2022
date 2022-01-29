import React from 'react';

import { Card} from 'react-bootstrap';
;


function Product({ product }) {
  return (
  <Card className="my-3 py-3 rounded product_container">
      <a className="product_image" href={'/product/${product._id}'}>
        <Card.Img src={product.image} />
      </a>

      <Card.Body>
        <a href={'/product/${product._id}'}>
            <Card.Title as="div">
                <strong className="products_description">{product.name}</strong>
            </Card.Title>
        </a>
        <Card.Text as="div">
            <div className="my-3 products_description">
                {product.rating} from {product.numReviews} reviews
            </div>
        </Card.Text>
      </Card.Body>

  </Card>
  )
}

export default Product;

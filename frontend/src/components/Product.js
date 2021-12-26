import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title> {product.name}</Card.Title>
        </a>
        <Card.Text>{product.rating}</Card.Text>
        <Card.Text> ${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

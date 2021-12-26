import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomePage = () => {
  return (
    <>
      <h2>Products</h2>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} l={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;

import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
// import products from '../products';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products/');
      setProducts(data);
    };
    fetchProducts();
  }, []);

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

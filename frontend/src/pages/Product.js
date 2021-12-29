import React, { useState, useEffect } from 'react';
import { Card, Col, Image, ListGroup, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Rating from '../components/Rating';
// import products from '../products';
import axios from 'axios';

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    status:
                    {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ textAlign: 'center' }}>
                  <Col>
                    <Button disabled={product.countInStock === 0}>
                      Add to cart
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Product;

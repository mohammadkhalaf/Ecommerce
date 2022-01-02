import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { listProducts } from '../actions/actions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h2>Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={'danger'} msg={error} />
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col sm={12} md={6} l={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomePage;

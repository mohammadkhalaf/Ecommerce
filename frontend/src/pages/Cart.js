import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from 'react-bootstrap';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { useParams, useLocation } from 'react-router-dom';

const Cart = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const quantity = location.search ? Number(location.search.split('=')[1]) : 1;
  console.log(quantity);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  useEffect(() => {
    dispatch(addToCart(id, quantity));
  }, [id, quantity, dispatch]);
  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkOutHandler = () => {
    navigate('/login?redirect=shipping');
  };
  return (
    <>
      <Row>
        <Col md={8}>
          <h2>Shopping cart</h2>
          {cartItems.length === 0 ? (
            <Message msg={'your cart is empty'} />
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => {
                return (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} fluid rounded></Image>
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as='select'
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((index) => {
                            return (
                              <option key={index + 1} value={index + 1}>
                                {index + 1}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          onClick={() => removeHandler(item.product)}
                        >
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  total (
                  {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)})
                </h2>
                $
                {cartItems
                  .reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item className='text-center'>
                <Button
                  type='button'
                  disabled={cartItems.length === 0}
                  onClick={checkOutHandler}
                >
                  Check out
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cart;

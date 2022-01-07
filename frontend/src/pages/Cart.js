import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
} from 'react-bootstrap';
import { addToCart } from '../actions/cartAction';
import { useParams, useLocation } from 'react-router-dom';

const Cart = () => {
  const { id } = useParams();
  const location = useLocation();
  const quantity = location.search ? Number(location.search.split('=')[1]) : 1;
  console.log(quantity);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  useEffect(() => {
    dispatch(addToCart(id, quantity));
  }, [id, quantity, dispatch]);
  return <div>cart</div>;
};

export default Cart;

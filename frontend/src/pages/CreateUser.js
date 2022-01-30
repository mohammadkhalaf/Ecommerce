import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
// import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { create } from '../actions/userAction';

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const redierct = location.search ? location.search.split('=')[1] : '/';
  const { loading, err, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redierct);
    }
  }, [navigate, userInfo, redierct]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(create(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign up</h1>
      {err && <Message variant='danger'>{err}</Message>}
      {message && <Message variant='danger'>{message}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type='password'
            placeholder='confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an account
          <Link to={redierct ? `/login?redirect=${redierct}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default CreateUser;

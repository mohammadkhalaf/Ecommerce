import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#'>Brad Name</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='ml-auto'>
              <Nav.Link href='/products'>products </Nav.Link>
              <Nav.Link href='/cart'>
                <RiShoppingCart2Line /> cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <FaUser /> sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

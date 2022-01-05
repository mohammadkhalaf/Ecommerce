import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/cart'>
                <Route path=':id' element={<Cart />} />
                <Route path='' element={<Cart />} />
              </Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

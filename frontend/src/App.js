import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import ProductListing from '../ProductListing';
import Snowflakes from '../Snowflakes';
import Footer from '../Footer';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

function App() {
  return (
    <React.Fragment>
      <Snowflakes />
      <Container className="app">
        <Row>
          <Col>
            <Header />
            <main>
              <ProductListing />
            </main>
            <Footer />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;

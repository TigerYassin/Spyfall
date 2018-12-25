import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Buttons } from './components/Button.js'
import { Container, Row, Col } from 'reactstrap';
import { FormAndInput } from './components/Form.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="container">
          <Row className="title">
            <Col sm="12" md="12" className="col">Welcome to Skyfall</Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col"><FormAndInput /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

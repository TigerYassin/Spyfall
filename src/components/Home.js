import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { FormAndInput } from './Form.js'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container className="container">
          <Row className="title">
            <Col sm="12" md="12" className="col">Welcome to Spyfall</Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col"><FormAndInput /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Home;

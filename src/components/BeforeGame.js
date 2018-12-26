import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { SecondForm  } from './SecondForm.js'
import './BeforeGame.css'

export default class BeforeGame extends Component {
  render() {
    return (
      <div className="Home">
        <Container className="container">
          <Row className="title">
            <Col sm="12" md="12" className="col">Ready to start the game?</Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col"><SecondForm  /></Col>
          </Row>
        </Container>

        //TODO add username and accesscode to database

      </div>
    )
  }
}

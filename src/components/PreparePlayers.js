import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PreparePlayers.css'
import { Container, Row, Col } from 'reactstrap';
import { FormAndInput } from './Form.js'

export default class PreparePlayers extends Component {
  render() {
    return (
      <div className="PreparePlayers">
        <Container className="container">
          <Row className="title">
            <Col sm="12" md="12" className="col">
              <p class="waiting">Waiting for players<span>.</span><span>.</span><span>.</span></p>
            </Col>
          </Row>
          <Row className="title" id="imageBox">
            <Col sm="12" md="12" className="col">
              <a href="https://fontmeme.com/christmas-fonts/" /><img src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/d/d3/Noel3.png/revision/latest?cb=20171208151106" alt="christmas-fonts" border="0" class="image"/>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col">
              <div className="row">
                <div className="col-sm-4 middle" class="box">
                  <ul class="list-group">
                    <li class="list-group-item">Basu</li>
                  </ul>
                </div>
                <div class="col-sm-4 middle">
                  <ul class="list-group">
                    <li class="list-group-item">Basu</li>
                  </ul>
                </div>
                <div class="col-sm-4 middle">
                  <ul class="list-group">
                    <li class="list-group-item">Basu</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

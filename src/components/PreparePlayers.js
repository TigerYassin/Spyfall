import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PreparePlayers.css'
import { Container, Row, Col } from 'reactstrap';
import { FormAndInput } from './Form.js'
import { Link } from 'react-router-dom';

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
              <a href="https://fontmeme.com/christmas-fonts/" /><img src="https://valeriesmusings76.files.wordpress.com/2016/11/xmas2.png?w=820" alt="christmas-fonts" border="0" class="image"/>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col">
              <div className="row">
                <div className="col-4 middle" >
                  <ul class="list-group">
                    <li class="list-group-item">Tony</li>
                    <li class="list-group-item">Peter</li>
                    <li class="list-group-item">Steve</li>
                  </ul>
                </div>
                <div class="col-4 col-md-4 middle">
                  <ul class="list-group">
                    <li class="list-group-item">Nick</li>
                    <li class="list-group-item">Miles</li>
                  </ul>
                </div>
                <div class="col-4 col-md-4 middle">
                  <ul class="list-group">
                    <li class="list-group-item">Bruce</li>
                    <li class="list-group-item">Clark</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col">
              <form>
              <p>
                <Link to="/">
                  <button className="btn btn-primary" class="secondStart">Back</button>
                </Link>
                <Link to="/AccessCodePlaceholder">
                  <button className="btn btn-primary" class="secondStart">Start Game</button>
                </Link>
              </p>
              </form>
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}

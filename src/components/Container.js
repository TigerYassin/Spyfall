import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Contain extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        </Row>
      </Container>
    );
  }
}

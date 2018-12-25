import React from 'react';
import './SecondForm.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class SecondForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <p>
            <input type="text" class="form-control" placeholder='Type your Name' name='name' />
          </p>
          <p>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroupMaterial-sizing-sm" placeholder='Access Code' name='code' />
          </p>
          <p>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col" className="selector">
            <select data-style="btn-new" className="custom-select">
              <option className="opt"># of spies</option>
              <option className="opt" value="1">1</option>
              <option className="opt" value="2">2</option>
              <option className="opt" value="3">3</option>
              <option className="opt" value="4">4</option>
              <option className="opt" value="5">5</option>
              <option className="opt" value="6">6</option>
            </select>
            </Col>
          </Row>

          </p>
          <p>
            <Link to="/">
              <button className="back" class="btn btn-primary">Back</button>
            </Link>
            <Link to="/starting">
              <button className="secondStart" class="btn btn-primary">Start Game</button>
            </Link>
          </p>
        </form>
      </div>
    )
  }
}

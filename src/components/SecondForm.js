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
            <input type="text" id="inputMDEx" className="form-control" class="input-lg" placeholder='Type your Name' name='name' />
          </p>
          <p>
            <input type="text" id="inputMDEx" className="form-control" class="input-lg" aria-label="Sizing example input" aria-describedby="inputGroupMaterial-sizing-sm" placeholder='Access Code' name='code' />
          </p>
          <p>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col" className="selector">
            <select data-style="btn-new" className="custom-select" class="input-lg" id="inputMDEx">
              <option className="opt"># of spies</option>
              <option className="opt" value="1">1</option>
              <option className="opt" value="2">2</option>
              <option className="opt" value="3">3</option>
              <option className="opt" value="4">4</option>
            </select>
            </Col>
          </Row>

          </p>
          <p>
            <div>
            <Link to="/">
              <button className="btn btn-primary" class="secondStart">Back</button>
            </Link>
            <Link to="/PreparePlayers">
              <button className="btn btn-primary" class="secondStart">Start Game</button>
            </Link>
            </div>
          </p>
        </form>
      </div>
    )
  }
}

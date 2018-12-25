import React from 'react';
import './SecondForm.css';
import { MDBBtn } from "mdbreact";
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
          <select class="mdb-select sm-form colorful-select dropdown-primary" className="slider">
            <option value="0">Choose # of Spies</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
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

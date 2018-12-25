import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import './Form.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class FormAndInput extends React.Component {
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
          <Link to="/BeforeGame">
            <button className="btn btn-primary" class="btn">Start Game</button>
          </Link>
          </p>
        </form>
      </div>
    )
  }
}

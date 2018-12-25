import React from 'react';
import './Form.css';
import { MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class FormAndInput extends React.Component {
  render() {
    return (
      <div>
        <form>
          <p>
            <input type="text" id="inputMDEx" class="form-control" placeholder='Type your Name' name='name' />
          </p>
          <p>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroupMaterial-sizing-sm" placeholder='Access Code' name='code' />
          </p>
          <p>
            <Link to="/BeforeGame">
              <button className="start" class="btn btn-primary">Start Game</button>
            </Link>
          </p>
        </form>
      </div>
    )
  }
}

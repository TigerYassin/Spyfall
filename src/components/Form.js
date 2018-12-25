import React from 'react';
import './Form.css';
import { MDBBtn } from "mdbreact";
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
          <p><button className="start" class="btn btn-primary">Start Game</button></p>
        </form>
      </div>
    )
  }
}

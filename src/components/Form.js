import React from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class FormAndInput extends React.Component {
  render() {
    return (
      <div>
        <form>
          <p><input class="form-control input-sm" type='text' placeholder='Type your Name' name='name' /></p>
          <p><input class="form-control input-sm" type='text' placeholder='Access Code' name='code' /></p>
          <p><button className="start">Start</button></p>
        </form>
      </div>
    )
  }
}

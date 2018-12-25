import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class FormAndInput extends React.Component {
  render() {
    return (
      <div>
        <form>
          <p><input class="form-control input-sm" type='text' placeholder='Username' name='name' /></p>
          <p><input class="form-control input-sm" type='text' placeholder='Access Code' name='code' /></p>
          <p><button type="button" class="btn btn-primary btn-md">Start Game</button></p>
        </form>
      </div>
    )
  }
}

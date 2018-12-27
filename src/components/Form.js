import React from 'react';
import { MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';

var NextPage = "/BeforeGame";
export class FormAndInput extends React.Component {

constructor(props){
  NextPage = "/BeforeGame";
  super(props);
  this.state = {AccessCode : "", UserName : ""}
  this.handleChange = this.handleChange.bind(this);
  this.handleChangeU = this.handleChangeU.bind(this);
}


handleChange(e) {
  this.setState({AccessCode : e.target.value })
  //TODO: check database for access code and then re-assign NextPage
  NextPage = "/PreparePlayers";
}

handleChangeU(e){
  this.setState({UserName : e.target.value })
  //TODO Pass the username as a PROP or pass to database
}

  render() {
    return (
      <div>

        <form>

          <p>
            <input type="text" id="inputMDEx" class="form-control" class="input-lg" placeholder='Type your Name' name='name' value= {this.state.UserName} onChange={this.handleChangeU}/>
          </p>
          <p>
            <input type="text" id="inputMDEx" class="form-control" class="input-lg" aria-label="Sizing example input" aria-describedby="inputGroupMaterial-sizing-sm" placeholder='Access Code' name='code' value= {this.state.AccessCode} onChange={this.handleChange} />
          </p>
          <p>
          <Link to= {NextPage}>
              <button className="btn btn-primary" class="start">Start Game</button>
          </Link>
          </p>
        </form>


      </div>
    )
  }
}

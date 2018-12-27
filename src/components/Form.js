import React from 'react';
import { MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import { AddPlayer } from './addPlayer.js';

var NextPage = "/BeforeGame";
export class FormAndInput extends React.Component {

constructor(props){
  NextPage = "/BeforeGame";
  super(props);
  this.state = {AccessCode : "", UserName : ""}
  this.handleChange = this.handleChange.bind(this);
  this.handleChangeU = this.handleChangeU.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


handleChange(e) {
  this.setState({AccessCode : e.target.value })
  //TODO: check database for access code and then re-assign NextPage
}

handleChangeU(e){
  this.setState({UserName : e.target.value })
  //TODO Pass the username as a PROP or pass to database
}

handleSubmit(e){  //TODO: check if user has entered a access key that is in the database or not

  if (this.state.AccessCode.length > 1) {
    NextPage = "/PreparePlayers";
    //When they provide an access code add their name to the database under their access code { A43Bd : "Yassin"}
    var person = {}
    person[this.state.AccessCode] = this.state.UserName;

    fetch('/display/players', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-type' : 'application/json'
      },

      body:JSON.stringify(person)
    })

  }

  window.location.href = NextPage;

}

  render() {
    return (
      <div>

        <form>

          <p>
            <input type="text" id="inputMDEx" className="form-control" className="input-lg" placeholder='Type your Name' name='name' value= {this.state.UserName} onChange={this.handleChangeU}/>
          </p>
          <p>
            <input type="text" id="inputMDEx" className="form-control" className="input-lg" aria-label="Sizing example input" aria-describedby="inputGroupMaterial-sizing-sm" placeholder='Access Code' name='code' value= {this.state.AccessCode} onChange={this.handleChange} />
          </p>

        </form>


      <AddPlayer UName={this.state.UserName} ACode={this.state.AccessCode} />
      <button className="btn btn-primary" className="start" onClick={this.handleSubmit}>Start Game</button>


      </div>
    )
  }
}

import React from 'react';
import './SecondForm.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class SecondForm extends React.Component {
  constructor(props){
      super(props);
      const AKeys = ["F4TR1I", "S22RT1", "UGAY21", "F4TF8CK","C7AY", "N0H0M8", "MERRY CRYSLER","GSU4LIF", "GATECH"]
      this.state = {AccessCode : (AKeys[Math.floor(Math.random() * AKeys.length)]), UserName: "", NumOfSpies: 1}
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChangeU = this.handleChangeU.bind(this)
      this.handleChangeI = this.handleChangeI.bind(this)
    }

    handleChangeI(e){
      this.setState({NumOfSpies : e.target.value })
    }

    handleChangeU(e){
      this.setState({UserName : e.target.value })
    }

    handleSubmit(e){  //TODO: check if user has entered a access key that is in the database or not

        //When they provide an access code add their name to the database under their access code { A43Bd : "Yassin"}
        var person = {}
        person[this.state.AccessCode] = this.state.NumOfSpies;
        fetch('/NumOfSpies', {
          method: 'POST',
          headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
          },
          body: JSON.stringify(person)
        })


        person[this.state.AccessCode] = this.state.UserName;

        fetch('/display/players', {
          method: 'POST',
          headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
          },

          body:JSON.stringify(person)
        })


      window.location.href = "/PreparePlayers";

    }


  render() {
    return (
      <div>
        <form>
          <p>
            <input type="text" id="inputMDEx" className="form-control" class="input-lg" placeholder='Type your Name' name='name' value={this.state.UserName} onChange={this.handleChangeU}/>
          </p>
          <p>
            <input type="text" id="inputMDEx" className="form-control" class="input-lg" aria-label="Sizing example input" aria-describedby="inputGroupMaterial-sizing-sm" placeholder='Access Code' name='code' value={this.state.AccessCode}/>
          </p>
          <p>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col" className="selector">
            <select data-style="btn-new" className="custom-select" class="input-lg" id="inputMDEx" onChange={this.handleChangeI}>
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

            </div>
          </p>
        </form>
        <Link to="/">
          <button className="btn btn-primary" class="secondStart">Back</button>
        </Link>
        <button className="btn btn-primary" class="secondStart" onClick={this.handleSubmit}>Start Game</button>

      </div>
    )
  }
}

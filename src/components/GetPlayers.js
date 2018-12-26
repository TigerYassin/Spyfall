import React from 'react';




export class GetPlayer extends React.Component {
constructor(props){
  super(props);
  this.state = { players : []}
}

componentDidMount() {
  fetch('/display/players').then(res => res.json())
  .then(players => this.setState({players}, () => console.log('Players fetched ...', players)));

  fetch('/display/players', {
    method: 'POST',
    headers: {
      'Accept' : 'application/json, text/plain, */*',
      'Content-type' : 'application/json'
    },
    body:JSON.stringify({id:5, username:"Sami"})
  })
}



render() {
  console.log(this.state.players)
  return (
    <div>
    working


    </div>
  )

}


}

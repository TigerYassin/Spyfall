import React from 'react';
import { Button } from 'reactstrap';

export class Buttons extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary">Oh</Button>{' '}
        <Button color="secondary">My</Button>{' '}
        <Button color="success">God.</Button>{' '}
        <Button color="info"> It</Button>{' '}
        <Button color="warning">finally</Button>{' '}
        <Button color="danger">works!</Button>{' '}
      </div>
    );
  }
}

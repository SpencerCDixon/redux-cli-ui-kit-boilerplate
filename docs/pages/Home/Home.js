import React, { Component } from 'react';
import Button from 'components/Button';

class Home extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => alert('workes')}>
          Sample Button
        </Button>
      </div>
    );
  }
}

export default Home;

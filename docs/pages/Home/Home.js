import React, { Component } from 'react';
import Button from 'components/Button';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';

class Home extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>Button</CardHeader>
          <Button onClick={() => alert('workes')}>
            Sample Button
          </Button>
        </Card>
      </div>
    );
  }
}

export default Home;

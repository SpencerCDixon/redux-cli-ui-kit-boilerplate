import React, { Component } from 'react';
import Button from 'components/Button';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import P from 'components/P';

class Home extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>Personal UI Kit</CardHeader>
          <CardContent>
            <P>This is where the directions for setting up the UI kit could live.</P>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Home;

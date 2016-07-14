import React, { Component, PropTypes } from 'react';
import Card from 'components/Card';
import CardContent from 'components/CardContent';
import CardHeader from 'components/CardHeader';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

class Example extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <Card>
        <CardHeader withRule>{title}</CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    );
  }
}

Example.propTypes = propTypes;
export default Example;

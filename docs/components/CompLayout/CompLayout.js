import React, { Component } from 'react';
// import css from './CompLayout.less';

class CompLayout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default CompLayout;

import React, { Component } from 'react';
import css from './P.css';

class P extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <p className={css.p} {...rest}>
        {children}
      </p>
    );
  }
}

export default P;

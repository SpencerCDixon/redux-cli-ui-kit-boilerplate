import React, { Component, PropTypes } from 'react';
import css from './P.css';

const propTypes = {
};

class P extends Component {
  render() {
    return (
      <p className={css.p}>
        {this.props.children}
      </p>
    );
  }
}

P.propTypes = propTypes;
export default P;

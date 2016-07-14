import React, { Component, PropTypes } from 'react';
import css from './Table.css';

const propTypes = {
};

class Table extends Component {
  render() {
    return (
      <table className={css.table}>
        {this.props.children}
      </table>
    );
  }
}

Table.propTypes = propTypes;
export default Table;

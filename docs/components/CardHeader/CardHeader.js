import React, { Component } from 'react';
import css from './CardHeader.css';

class CardHeader extends Component {
  render() {
    return (
      <div>
        <h2 className={css.header}>
          {this.props.children}
        </h2>
        <hr className={css.hr} />
      </div>
    );
  }
}

export default CardHeader;

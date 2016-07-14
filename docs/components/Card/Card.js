import React, { Component } from 'react';
import css from './Card.css';

class Card extends Component {
  render() {
    return (
      <div className={css.card}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;

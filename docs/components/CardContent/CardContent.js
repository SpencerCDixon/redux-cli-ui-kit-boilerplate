import React, { Component } from 'react';
import css from './CardContent.css';

class CardContent extends Component {
  render() {
    return (
      <div className={css.content}>
        {this.props.children}
      </div>
    );
  }
}

export default CardContent;

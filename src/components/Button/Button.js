import React, { Component, PropTypes } from 'react';
import css from './Button.css';
import cn from 'classnames';

const propTypes = {
  /**
   * Children to be displayed inside the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback fired off when clicked
   */
  onClick: PropTypes.func,
  /**
   * Boolean to determine whether or not button is highlighted
   */
  isActive: PropTypes.bool,
};

const defaultProps = {
  onClick: () => alert('replace me'),
  isActive: false,
};

/**
 * Just a simple button
 */
class Button extends Component {
  render() {
    const { onClick, children } = this.props;

    const classes = cn(
      css.button
    );

    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;

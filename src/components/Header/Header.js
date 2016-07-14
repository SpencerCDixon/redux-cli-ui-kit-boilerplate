import React, { Component, PropTypes } from 'react';
import css from './Header.css';

const propTypes = {
  /**
  * Text to be displayed inside header
  */
  children: PropTypes.node,
};
const defaultProps = {
};

/**
 * Description of what this component does
 */
class Header extends Component {
  render() {
    return (
      <h2>
        {this.props.children}
      </h2>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;

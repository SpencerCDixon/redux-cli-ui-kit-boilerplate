import React, { Component, PropTypes } from 'react';
// import css from './Text.css';

const propTypes = {
  /**
   * Text to be rendered
   */
  children: PropTypes.node,
};
const defaultProps = {
};

/**
 * Component for displaying Text
 */
class Text extends Component {
  render() {
    return (
      <p>
        {this.props.children}
      </p>
    );
  }
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default Text;

import React, { Component, PropTypes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/styles';

const propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
};
const defaultProps = {
  language: 'javascript',
};

/**
 * Description of what this component does
 */
class CodeBlock extends Component {
  render() {
    const { language, children } = this.props;
    return (
      <SyntaxHighlighter language={language} style={solarizedDark}>
        {children}
      </SyntaxHighlighter>
    );
  }
}

CodeBlock.propTypes = propTypes;
CodeBlock.defaultProps = defaultProps;
export default CodeBlock;

import React, { Component } from 'react';
import ButtonDocumentation from 'components/Button/ButtonDocumentation';
import BasicExample from 'components/Button/examples/BasicExample';

class ButtonContainer extends Component {
  render() {
    return (
      <div>
        <BasicExample />
        <ButtonDocumentation />
      </div>
    );
  }
}

export default ButtonContainer;

import React, { Component } from 'react';
import <%= pascalEntityName %>Documentation from 'components/<%= pascalEntityName %>/<%= pascalEntityName %>Documentation';

class <%= pascalEntityName %>Container extends Component {
  render() {
    return (
      <div>
        <<%= pascalEntityName %>Documentation />
      </div>
    );
  }
}

export default <%= pascalEntityName %>Container;

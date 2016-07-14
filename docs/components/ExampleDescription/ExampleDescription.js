import React from 'react';
import Text from 'components/Text';

function ExampleDescription({ children }) {
  return (
    <div>
      <Text style={{marginBottom: '0'}}>
        {children}
      </Text>
      <Text style={{marginBottom: '5px'}} flavor="emphasis">Demo</Text>
    </div>
  );
}

export default ExampleDescription;

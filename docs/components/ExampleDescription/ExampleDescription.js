import React from 'react';
import P from 'components/P';

function ExampleDescription({ children }) {
  return (
    <div>
      <P style={{marginBottom: '0'}}>
        {children}
      </P>
      <P style={{marginBottom: '5px'}}>Demo</P>
    </div>
  );
}

export default ExampleDescription;

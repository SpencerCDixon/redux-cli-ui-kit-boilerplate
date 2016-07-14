import React from 'react';
import Example from 'components/Example';

const renderComp = renderFactory(Example, {
});

describe('Example', function() {
  it('renders as a <replace>', function() {
    expect(true).to.be.true;
  });
});

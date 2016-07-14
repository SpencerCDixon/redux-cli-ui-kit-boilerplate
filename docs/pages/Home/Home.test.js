import React from 'react';
import Home from 'components/Home';

const renderComp = renderFactory(Home, {
});

describe('Home', function() {
  it('renders as a <replace>', function() {
    expect(true).to.be.true;
  });
});

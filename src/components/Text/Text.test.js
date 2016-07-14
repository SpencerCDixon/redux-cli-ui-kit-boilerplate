import React from 'react';
import Text from 'components/Text';

describe('Text', function() {
  it('renders as a <p>', function() {
    const wrapper = shallow(<Text>example</Text>);
    expect(wrapper.type()).to.eq('p');
  });
});

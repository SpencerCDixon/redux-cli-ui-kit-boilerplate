import Button from 'components/Button';
import css from 'components/Button/Button.less';

describe('Button', function() {
  let wrapper;

  before(function() {
    wrapper = shallow(<Button>Hello</Button>);
  });

  it('renders as a <button>', function() {
    expect(wrapper.type()).to.eql('button');
  });

  it('has the default css for a button', function() {
    expect(wrapper.prop('className')).to.include(css.button);
  });
});

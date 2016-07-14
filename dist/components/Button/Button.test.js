'use strict';

var _Button = require('components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Button3 = require('components/Button/Button.css');

var _Button4 = _interopRequireDefault(_Button3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button', function () {
  var wrapper = void 0;

  before(function () {
    wrapper = shallow(React.createElement(
      _Button2.default,
      null,
      'Hello'
    ));
  });

  it('renders as a <button>', function () {
    expect(wrapper.type()).to.eql('button');
  });

  it('has the default css for a button', function () {
    expect(wrapper.prop('className')).to.include(_Button4.default.button);
  });
});
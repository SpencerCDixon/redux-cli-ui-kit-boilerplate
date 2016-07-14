'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('components/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Text', function () {
  it('renders as a <p>', function () {
    var wrapper = shallow(_react2.default.createElement(
      _Text2.default,
      null,
      'example'
    ));
    expect(wrapper.type()).to.eq('p');
  });
});
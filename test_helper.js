// ---------------------------------------
// Test Environment Setup
// ---------------------------------------
import React from 'react';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';

chai.use(sinonChai);
chai.use(chaiEnzyme());

global.chai     = chai;
global.sinon    = sinon;
global.expect   = chai.expect;
global.should   = chai.should();
global.shallow  = shallow;
global.mount    = mount;
global.React    = React;

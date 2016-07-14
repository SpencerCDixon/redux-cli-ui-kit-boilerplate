import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import CoreLayout from './components/CoreLayout/CoreLayout.js';
import CompLayout from './components/CompLayout/CompLayout.js';

// Container Views
import HeaderContainer from 'containers/HeaderContainer';
import TextContainer from 'containers/TextContainer';
import ButtonContainer from 'containers/ButtonContainer';

// Pages
import Home from './pages/Home';

export default () => (
  <Route path="/" component={CoreLayout}>
    <IndexRedirect to="components" />

    <Route path="components" component={CompLayout}>
      <Route path="header" component={HeaderContainer} />
      <Route path="text" component={TextContainer} />
      <Route path="button" component={ButtonContainer} />
      <IndexRoute component={Home} />
    </Route>
  </Route>
);

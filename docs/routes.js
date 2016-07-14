import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import CoreLayout from './components/CoreLayout/CoreLayout.js';
import CompLayout from './components/CompLayout/CompLayout.js';

// Container Views
import TextContainer from 'containers/TextContainer';
import ButtonContainer from 'containers/ButtonContainer';

// Pages
import Home from './pages/Home';

export default () => (
  <Route path="/" component={CoreLayout}>
    <Redirect to="components" />

    <Route path="components" component={CompLayout}>
      <IndexRoute component={Home} />
      <Route path="text" component={TextContainer} />
      <Route path="button" component={ButtonContainer} />
    </Route>
  </Route>
);

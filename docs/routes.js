import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from './components/CoreLayout/CoreLayout.js';
import CompLayout from './components/CompLayout/CompLayout.js';

// Container Views
import TextContainer from 'containers/TextContainer';
import ButtonContainer from 'containers/ButtonContainer';

// Pages
import Home from './pages/Home';

export default () => (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} />

    <Route path="components" component={CompLayout}>
      <Route path="text" component={TextContainer} />
      <Route path="button" component={ButtonContainer} />
    </Route>
  </Route>
);

import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import routes from './components/Routes';

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('root')
)

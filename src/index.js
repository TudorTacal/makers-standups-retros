import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import StandupPage from './components/StandupPage';

render(
  <StandupPage/>,
  document.getElementById('root')
)

import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import HomePage from './components/HomePage';

render(
  <HomePage/>,
  document.getElementById('root')
)

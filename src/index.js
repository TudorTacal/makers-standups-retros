import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import HomePage from './components/HomePage';
import StandupPage from './components/StandupPage'
import RetroPage from './components/RetroPage'

render(
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/standup" component={StandupPage}/>
    <Route path="/retro" component={RetroPage}/>
  </Router>,
  document.getElementById('root')
)

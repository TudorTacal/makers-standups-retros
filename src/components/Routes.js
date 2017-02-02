import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import HomePage from './HomePage';
import StandupPage from './StandupPage'
import RetroPage from './RetroPage'


const routes = (
    <Route>
      <Route path="/" component={HomePage}/>
      <Route path="/standups" component={StandupPage}>
        <Route path="/standups/:id" component={StandupPage}/>
      </Route>
      <Route path="/retro" component={RetroPage}/>
    </Route>
);

export default routes;

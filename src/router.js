import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BlogPage from './routes/BlogPage';
import ContextPage from './routes/ContextPage';
import Home from './routes/Home';
import HomePage from './routes/HomePage';
import SidePage from './routes/SidePage';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/BlogPage" exact component={BlogPage} />
        <Route path="/ContextPage" exact component={ContextPage} />
        <Route path="/" exact component={Home} />
        <Route path="/HomePage" exact component={HomePage} />
        <Route path="/SidePage" exact component={SidePage} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

import Users from "./routes/Users.js";

import Test from "./routes/Test.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/products" component={Products} />
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/Test" component={Test} />
    </Router>
  );
}

export default RouterConfig;

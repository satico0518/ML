import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Screens
import SearchScreen from '../pages/search/SearchScreen';
import SearchResults from '../pages/results/SearchResults';
import ProductDetail from '../pages/detail/ProductDetail';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SearchScreen} />
      <Route exact path="/items" component={SearchResults} />
      <Route exact path="/items/:id" component={ProductDetail} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

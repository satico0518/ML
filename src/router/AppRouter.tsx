import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { store } from '../redux/store';

// Screens
import SearchScreen from '../pages/search/SearchScreen';
import SearchResults from '../pages/results/SearchResults';
import ProductDetail from '../pages/detail/ProductDetail';

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={SearchScreen} />
        <Route exact path="/items" component={SearchResults} />
        <Route exact path="/items/:id" component={ProductDetail} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Auth from 'pages/Auth';
import Home from 'pages/HomePage';
import ProtectedRoute from './protectedRoute';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <ProtectedRoute path="/home">
          <Home />
        </ProtectedRoute>
        <Route path="*">
          <Redirect exact from="/" to="home" />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Routes;

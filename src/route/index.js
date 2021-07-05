import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from 'pages/HomePage';
import ProtectedRoute from './protectedRoute';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
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

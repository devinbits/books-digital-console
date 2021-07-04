import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Auth from 'components/Auth';
import Home from 'pages/HomePage';
import ProtectedRoute from './protectedRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <ProtectedRoute path="/home">
          <Home />
        </ProtectedRoute>
        <Route path="*">
          <Redirect exact from="/" to="dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

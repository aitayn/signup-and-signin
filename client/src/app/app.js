import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import PrivateRoute from '../routes/privateRoute';
import PageNotFound from '../pageNotFound/pageNotFound';
import Home from '../home/home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main role="main">
          <Switch>
            <PrivateRoute path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

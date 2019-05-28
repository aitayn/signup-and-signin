import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/site.scss';
import Login from '../login/login';
import PrivateRoute from '../routes/privateRoute';
import PageNotFound from '../pageNotFound/pageNotFound';
import Home from '../home/home';
import SignUp from '../login/signUp';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main role="main">
          <Switch>
            <PrivateRoute path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

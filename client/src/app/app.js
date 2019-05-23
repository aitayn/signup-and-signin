import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import PrivateRoute from '../routes/privateRoute';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main role="main">
          <Switch>
            <PrivateRoute path="/" exact />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

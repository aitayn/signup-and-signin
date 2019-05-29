import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/site.scss';
import Login from '../login/login';
import PrivateRoute from '../routes/privateRoute';
import PageNotFound from '../pageNotFound/pageNotFound';
import Home from '../home/home';
import SignUp from '../login/signUp';
import LoadingSpinner from '../loader/loadingSpinner';
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { loader } = this.props;
    return (
      <BrowserRouter>
        <main role="main">
          {loader.loading && <LoadingSpinner message={loader.message} fullscreen={true} />}
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

const mapStateToProp = state => ({
  loader: state.loader
})

export default connect(
  mapStateToProp, null
)(App);

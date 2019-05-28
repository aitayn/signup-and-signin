import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { login } from './actions/sessionAction';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    }
  }
  render() {
    const { email, password, error } = this.state;
    const { target } = this.props.location.state || { target: { pathname: '/' } };
    if (this.props.session && this.props.session.loggedIn && this.props.session.user) {
      return <Redirect to={target} />
    }
    return (
      <div className="container">
        <form className="login-form border-gray">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className="form-control" type="email" name="email" value={email} placeholder="Enter your email" onChange={(e) => this.onChange('email', e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" value={password} placeholder="Enter your password" onChange={(e) => this.onChange('password', e.target.value)} />
          </div>
          <button type="submit" className="btn btn-block btn-primary" onClick={this.onSubmit}>Login</button>
          {error && <small className="text-danger">{error}</small>}
          <div className="d-flex justify-content-center pt-2">Not a user?<Link to="/sign-up">Sign up</Link></div>
        </form>
      </div>
    );
  }

  onChange = (property, value) => {
    this.setState({ [property]: value })
  }

  onSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    if (!email || !password) {
      this.setState({ error: 'Please provide valid email or password' });
      return;
    }

    this.props.login({ email, password });
  }
}

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProp = dispatch => bindActionCreators({
  login
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Login);

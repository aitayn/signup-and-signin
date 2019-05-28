import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { loginAction } from './actions/sessionAction';

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
    const { target } = this.props.location.state || {target: {pathname: '/'}};
    if (this.props.session && this.props.session.loggedIn && this.props.session.user) {
      return <Redirect to={target} />
    }
    return (
      <form>
        {error && <small>{error}</small>}
        <input type="email" name="email" value={email} placeholder="Enter your email" onChange={(e) => this.onChange('email', e.target.value)} />
        <input type="password" name="password" value={password} placeholder="Enter your password" onChange={(e) => this.onChange('password', e.target.value)} />
        <button type="submit" onClick={this.onSubmit}>Login</button>
        Not a user?<Link to="/sign-in">Sign in</Link>
      </form>
    );
  }

  onChange = (property, value) => {
    this.setState({ [property]: value })
  }

  onSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    if (!email || !password) {
        this.setState({error: 'Please provide valid email or password'});
        return;
    }

    this.props.loginAction({email, password});
  }
}

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProp = dispatch => bindActionCreators({
  loginAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Login);

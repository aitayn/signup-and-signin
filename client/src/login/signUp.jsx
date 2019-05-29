import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { signUp } from './actions/sessionAction';
import { startLoader, stopLoader } from '../loader/actions/loaderAction';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: null
        }
    }
    componentWillReceiveProps(nextprops) {
        const { session, signUp } = this.props;
        if (nextprops.session && nextprops.session !== session && nextprops.session.loggedIn && nextprops.session.user) {
            this.props.stopLoader();
        }

        if (nextprops.signUp && nextprops.signUp !== signUp && nextprops.signUp.data && nextprops.signUp.error) {
            this.setState({ error: nextprops.signUp.data });
            this.props.stopLoader();
        }
    }
    render() {
        const { email, password, firstName, lastName, error } = this.state;
        const { target } = this.props.location.state || { target: { pathname: '/' } };
        if (this.props.session && this.props.session.loggedIn && this.props.session.user) {
            return <Redirect to={target} />
        }
        return (
            <div className="container">
                <form className="login-form border-gray">
                    <div className="row form-group">
                        <div className="col">
                            <label htmlFor="firstName">First Name</label>
                            <input className="form-control" type="text" name="firstName" value={firstName} placeholder="First Name" onChange={(e) => this.onChange('firstName', e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="lastName">Last Name</label>
                            <input className="form-control" type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={(e) => this.onChange('lastName', e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" value={email} placeholder="Enter your email" onChange={(e) => this.onChange('email', e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" name="password" value={password} placeholder="Enter your password" onChange={(e) => this.onChange('password', e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-block btn-primary" onClick={this.onSubmit}>Sign Up</button>
                    {error && <small className="text-danger">{error}</small>}
                    <div className="d-flex justify-content-center pt-2">Already a User?<Link to="/login">Login</Link></div>
                </form>
            </div>
        );
    }

    onChange = (property, value) => {
        this.setState({ [property]: value })
    }

    onSubmit = (e) => {
        const { email, password, firstName, lastName } = this.state;
        e.preventDefault();
        if (!email || !password || !firstName || !lastName) {
            this.setState({ error: 'All the fields are mandatory.' });
            return;
        }
        this.props.startLoader('Signing Up...');
        this.props.signUp({ email, password, firstName, lastName });
    }
}

const mapStateToProps = state => ({
    session: state.session,
    signUp: state.signUp
});

const mapDispatchToProp = dispatch => bindActionCreators({
    signUp,
    startLoader,
    stopLoader
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(SignUp);

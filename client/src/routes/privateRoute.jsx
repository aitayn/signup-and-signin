import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, session, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            return (session && session.loggedIn && session.user ? <Component {...props} />
            : <Redirect to='/login' />);
        }} />
    );
}
const mapStateToProps = state => ({
    session: state.session
});

export default connect(
    mapStateToProps,
    null
)(PrivateRoute);


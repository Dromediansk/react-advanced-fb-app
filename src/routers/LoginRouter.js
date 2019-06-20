import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';

const LoginRouter = ({ user, location }) => {
    console.log(location)

    if (user !== null) {
        if (location.state && location.state.referrer) {
            return <Redirect to={location.state.referrer} />
        }

        return <Redirect to="/dashboard" />
    }

    return <LoginPage />
}

const mapState = state => ({
    user: state.session.user
});

export default connect(
    mapState
)(LoginRouter);
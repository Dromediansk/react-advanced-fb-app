import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage/DashboardPage';

const DashboardRouter = ({ location, user, ...props }) => {
    console.log(props)

    if (user === null) {
        return <Redirect to={{
            pathname: "/login",
            state: {
                referrer: location.pathname
            }
        }} />
    }

    return <DashboardPage />
}

const mapState = state => ({
    user: state.session.user
})

export default connect(mapState)(DashboardRouter);
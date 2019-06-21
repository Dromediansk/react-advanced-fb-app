import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Profile from './content/Profile';
import Likes from './content/Likes';

const DashboardPage = () => {
    return (
        <div>
            <Sidebar />
            <Switch>
                <Route path="/dashboard/profile" component={Profile} />
                <Route path="/dashboard/likes" component={Likes} />
                <Redirect to="/dashboard/profile" />
            </Switch>
        </div>
    )
}

const mapState = state => ({
    session: state.session
})

const mapDispatch = dispatch => ({
    logout: () => dispatch.session.logout()
});

export default connect(
    mapState,
    mapDispatch
)(DashboardPage);
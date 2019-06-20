import React from "react";
import { connect } from "react-redux";

const DashboardPage = ({ logout }) => {
    return <button onClick={logout}>Logout</button>
}

const mapState = state => ({})

const mapDispatch = dispatch => ({
    logout: () => dispatch.session.logout()
});

export default connect(
    mapState,
    mapDispatch
)(DashboardPage);
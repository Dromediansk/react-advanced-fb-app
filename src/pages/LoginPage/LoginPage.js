import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";

function LoginPage(props) {
    console.log(props)
    const responseFacebook = response => {
        props.facebookLogin(response);
    };

    return (
        <div className="App">
            <header className="App-header">
                <FacebookLogin
                    autoLoad={false}
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    fields="name,email,picture"
                    onClick={() => { }}
                    callback={responseFacebook}
                />
            </header>
        </div>
    );
}

// name: value to obtain
const mapState = state => ({
    state: state.session
});

const mapDispatch = dispatch => ({
    facebookLogin: payload => dispatch.session.facebookLogin(payload)
});

export default connect(
    mapState,
    mapDispatch
)(LoginPage);
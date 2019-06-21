import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";

function LoginPage({ facebookLogin, logout, session }) {
    const responseFacebook = response => {
        facebookLogin(response);
    };

    console.log(session)

    return (
        <div className="App">
            <header>
                <FacebookLogin
                    autoLoad={false}
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    scope="public_profile,user_likes"
                    fields="name,email,picture,likes"
                    callback={responseFacebook}
                />
            </header>
        </div>
    );
}

// name: value to obtain
const mapState = state => ({
    session: state.session
});

const mapDispatch = dispatch => ({
    facebookLogin: payload => dispatch.session.facebookLogin(payload),
    logout: () => dispatch.session.logout()
});

export default connect(
    mapState,
    mapDispatch
)(LoginPage);
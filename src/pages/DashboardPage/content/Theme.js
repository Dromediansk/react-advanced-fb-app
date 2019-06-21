import React from 'react';
import { ThemeConsumer } from '../../../blocks/ThemeContext';
import { connect } from "react-redux";
import { THEMES } from '../../../resources/strings';

const Theme = ({ changeTheme }) => {
    return (
        <ThemeConsumer>
            {theme => {
                const buttonStyle = {
                    backgroundColor: theme.brand,
                    color: theme.contrast,
                    border: `1px solid ${theme.contrast}`,
                };

                return (
                    <section className="content theme">
                        <button
                            onClick={() => changeTheme(THEMES.DEFAULT)}
                            style={buttonStyle}
                        >
                            Change to {THEMES.DEFAULT}
                        </button>

                        <button
                            onClick={() => changeTheme(THEMES.LIGHT)}
                            style={buttonStyle}
                        >
                            Change to {THEMES.LIGHT}
                        </button>

                        <button
                            onClick={() => changeTheme(THEMES.DARK)}
                            style={buttonStyle}
                        >
                            Change to {THEMES.DARK}
                        </button>
                    </section>
                )
            }}
        </ThemeConsumer>
    )
}

const mapDispatch = dispatch => ({
    changeTheme: (themeName) => dispatch.session.changeTheme(themeName)
});

export default connect(
    null,
    mapDispatch
)(Theme);
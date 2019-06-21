import React, { createContext } from "react";
import { connect } from "react-redux";

import THEMES from '../resources/themes';

const ThemeContext = createContext(THEMES.DEFAULT);

export const ThemeConsumer = ThemeContext.Consumer;

function ThemeProviderRenderer({ children, theme }) {
    return (
        <ThemeContext.Provider value={THEMES[theme]}>{children}</ThemeContext.Provider>
    );
}

const mapState = state => ({
    theme: state.session.theme
})

export const ThemeProvider = connect(
    mapState,
)(ThemeProviderRenderer)

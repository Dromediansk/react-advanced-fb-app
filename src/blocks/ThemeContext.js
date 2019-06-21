import React, { createContext } from 'react';

const DEFAULT = {
    brand: "#F24545",
    contrast: "white",
};

const LIGHT = {
    brand: "#dfe3ee",
    contrast: "#454648",
};

const DARK = {
    brand: "#003c3c",
    contrast: "white",
};

export const ThemeContext = createContext(LIGHT);

export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider = ({ children }) => {
    return <ThemeContext.Provider value={DEFAULT}>
        {children}
    </ThemeContext.Provider>
}

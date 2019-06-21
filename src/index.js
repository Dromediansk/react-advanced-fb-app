import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import MainRouter from './routers/MainRouter';
import WebFont from "webfontloader";
import { ThemeProvider } from './blocks/ThemeContext';

import './style.scss';

function App() {
    const [fontLoaded, setFontLoaded] = useState(true)

    useEffect(() => {
        WebFont.load({
            google: {
                families: ["Nunito:300,400,500,700"],
            },
            fontinactive: () => {
                console.log("Failed to load the font");
                setFontLoaded(true);
            },
            fontactive: () => {
                setFontLoaded(true);
            },
        });
    }, []) // useEffect will be invoked only once

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    {fontLoaded ? <MainRouter /> : null}
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
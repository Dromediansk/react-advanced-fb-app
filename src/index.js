import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import MainRouter from './routers/MainRouter';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MainRouter />
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
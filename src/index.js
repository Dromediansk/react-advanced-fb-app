import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
    return (
        <Provider store={store}>
            <LoginPage />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
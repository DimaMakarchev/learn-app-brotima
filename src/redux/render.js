import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import store from "./globalState";
import {storeFun} from "./functions";


export const renderFUN = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App globalState={store.getGlobal()}
                 dispatch={storeFun.dispatch}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

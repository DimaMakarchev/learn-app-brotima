import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import store from "./state/globalState";
import {dispatchFun} from "./functions/dispatcher";


export const renderFUN = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App globalState={store.getGlobal()}
                 dispatch={dispatchFun.dispatch}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

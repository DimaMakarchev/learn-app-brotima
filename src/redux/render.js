import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import globalState from "./globalState";
import {getDefaultForTextAreaPost, getNewPost} from "./functions";


export const renderFUN = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App globalState={globalState}
                 getNewPost={getNewPost}
                 getDefaultForTextAreaPost={getDefaultForTextAreaPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

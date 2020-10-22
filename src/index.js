import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/reduxNew";

export const renderFUN = (store) => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                 dispatch={store.dispatch}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderFUN(store);

store.subscribe(() => {
    renderFUN(store);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

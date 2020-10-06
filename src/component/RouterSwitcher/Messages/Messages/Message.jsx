import React, {Component} from 'react';
import classStyle from '../Messages.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";


const Message = (props) => {
    // debugger;

    return (
        <div className={classStyle.message}>
            {props.data.message}
        </div>
    )
};
export default Message;

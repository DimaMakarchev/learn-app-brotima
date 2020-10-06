import React, {Component} from 'react';
import classStyle from './Messages.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";
import User from "./Users/User";
import Message from "./Messages/Message";

let refMessage = React.createRef();
const Messages = ({globalState}) => {

    const methodXXX = () => {
        let value = refMessage.current.value;
        alert(value);
    }

    return (
        <div className={classStyle.messages}>
            <div className={classStyle.users}>
                {
                    globalState.users.map(value => <User data={value}/>
                    )
                }
            </div>
            <div className={classStyle.messagesForUser}>
                {
                    globalState.messages.map(value => {
                        return <Message data={value}/>
                    })
                }
            </div>
        </div>
    );
};

export default Messages;

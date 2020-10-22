import React from 'react';
import classStyle from './Messages.module.css'
import PropTypes from 'prop-types';
import User from "./Users/User";
import Message from "./Messages/Message";
import {actionDefaultMessages, actionNewMessages} from "../../../redux/functions/reducers/reducerMessages";
import Messages from "./Messages";

const MessagesContainer = ({store}) => {
    let users = store.getState().messagesPage.users;
    let messages = store.getState().messagesPage.messages;
    let messagesDataBody = store.getState().messagesPage.messagesDataBody;

    const handlerClickMessages = (data) => {
        debugger;
        store.dispatch(actionNewMessages(data));
    };

    const handlerChangeMessages = (data) => {
        debugger;
        store.dispatch(actionDefaultMessages(data));
    };

    return (
        <>
            <Messages users={users}
                      messages={messages}
                      handlerClickMessages={handlerClickMessages}
                      handlerChangeMessages={handlerChangeMessages}
                      messagesDataBody={messagesDataBody}
            />
        </>
    );
};

MessagesContainer.propTypes = {
    globalState: PropTypes.object,
    dispatch: PropTypes.func,

};

export default MessagesContainer;

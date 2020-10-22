import React from 'react';
import classStyle from './Messages.module.css'
import PropTypes from 'prop-types';
import User from "./Users/User";
import Message from "./Messages/Message";
import {actionDefaultMessages, actionNewMessages} from "../../../redux/functions/reducers/reducerMessages";

let refMessage = React.createRef();
const Messages = ({store}) => {

    const handlerClickMessages = (e) => {
        e.preventDefault();
        debugger;
        store.dispatch(actionNewMessages(refMessage.current.value))
    };

    const handlerChangeMessages = () => {
        let value = refMessage.current.value;
        store.dispatch(actionDefaultMessages(value))
    };


    return (
        <div className={classStyle.messages}>
            <div className={classStyle.users}>
                {
                    store.getState().messagesPage.users.map(value => <User data={value}/>
                    )
                }
            </div>
            <div className={classStyle.messagesForUser}>
                {
                    store.getState().messagesPage.messages.map(value => {
                        return <Message data={value}/>
                    })
                }
                <form>
                    <fieldset>
                    <textarea ref={refMessage} onChange={handlerChangeMessages}
                              value={store.getState().messagesPage.messagesDataBody}
                    />
                        <input type='submit' value='spend' onClick={handlerClickMessages}/>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

Messages.propTypes={
    globalState: PropTypes.object,
    dispatch: PropTypes.func,

};

export default Messages;

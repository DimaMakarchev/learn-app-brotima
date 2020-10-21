import React from 'react';
import classStyle from './Messages.module.css'
import PropTypes from 'prop-types';
import User from "./Users/User";
import Message from "./Messages/Message";
import {actionDefaultMessages, actionNewMessages} from "../../../redux/functions/reducers/reducerMessages";

let refMessage = React.createRef();
const Messages = ({messagesPage,dispatch}) => {

    const handlerClickMessages = (e) => {
        e.preventDefault();
        debugger;
        dispatch(actionNewMessages(refMessage.current.value))
    };

    const handlerChangeMessages = () => {
        let value = refMessage.current.value;
        dispatch(actionDefaultMessages(value))
    };


    return (
        <div className={classStyle.messages}>
            <div className={classStyle.users}>
                {
                    messagesPage.users.map(value => <User data={value}/>
                    )
                }
            </div>
            <div className={classStyle.messagesForUser}>
                {
                    messagesPage.messages.map(value => {
                        return <Message data={value}/>
                    })
                }
                <form>
                    <fieldset>
                    <textarea ref={refMessage} onChange={handlerChangeMessages}
                              value={messagesPage.messagesDataBody}
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
/*import React from 'react';
import classStyle from './Messages.module.css'
import User from "./Users/User";
import Message from "./Messages/Message";
import {actionDefaultMessages} from "../../../redux/functions";

let refMessage = React.createRef();
const Messages = (globalState,dispatch) => {

    const handlerClickMessages = (e) => {
        e.preventDefault();
        alert("ok")
    };

    const handlerChangeMessages = () => {
        let value = refMessage.current.value;
        dispatch(actionDefaultMessages(value))
    };

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
111*/

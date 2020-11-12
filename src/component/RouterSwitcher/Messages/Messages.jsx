import React from 'react';
import classStyle from './Messages.module.css'
import PropTypes from 'prop-types';
import User from "./Users/User";
import Message from "./Messages/Message";

let refMessage = React.createRef();
const Messages = ({
                      users,
                      messages,
                      handlerClickMessages,
                      handlerChangeMessages,
                      messagesDataBody
                  }) => {

    const handlerClickMessagesMy = (e) => {
        e.preventDefault();
        debugger;
        handlerClickMessages(refMessage.current.value);
    };

    const handlerChangeMessagesMy = (e) => {
        e.preventDefault();
        handlerChangeMessages(refMessage.current.value);
    };


    return (
        <div className={classStyle.messages}>
            <div className={classStyle.users}>
                {
                    users.map(value => <User data={value}/>)
                }
            </div>
            <div className={classStyle.messagesForUser}>
                {
                    messages.map(value => {
                        return <Message data={value}/>
                    })
                }
                <form>
                    <fieldset>
                    <textarea ref={refMessage} onChange={handlerChangeMessagesMy}
                              value={messagesDataBody}
                    />
                        <input type='submit' value='spend' onClick={handlerClickMessagesMy}/>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

Messages.propTypes = {
    globalState: PropTypes.object,
    dispatch: PropTypes.func,

};

export default Messages;

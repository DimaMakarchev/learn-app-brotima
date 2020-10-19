let NEW_MESSAGES = 'NEW-MESSAGES';
let UPDATE_DATA = 'UPDATE_DATA';


export const reducerMessages = (action, store) => {
    switch (action.type) {
        case UPDATE_DATA:
            store.messagesDataBody = action.data;
            return;
        case NEW_MESSAGES:
            let mess = {
                id: 1,
                message: action.data
            };
            store.messages.push(mess);
            store.messagesDataBody = '';
            return;
        default:
            return;
    }
};
export const actionNewMessages = (data) => ({type: NEW_MESSAGES, data: data});
export const actionDefaultMessages = (data) => ({type: UPDATE_DATA, data: data});



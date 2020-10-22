let NEW_MESSAGES = 'NEW-MESSAGES';
let UPDATE_DATA = 'UPDATE_DATA';
let messagesPage = {
    users: [
        {id: 1, name: 'Bro'},
        {id: 2, name: 'Ti'},
        {id: 3, name: 'Ma'},
        {id: 4, name: 'I'},
    ],
    messages: [
        {id: 1, message: 'Уроки React JS 1'},
        {id: 2, message: 'Уроки React JS 2'},
        {id: 3, message: 'Уроки React JS 3 '},
        {id: 4, message: 'Уроки React JS 4'},
    ],
    messagesDataBody: '',
};

export const reducerMessages = ( store=messagesPage,action,) => {
    debugger;
    switch (action.type) {
        case UPDATE_DATA:
            store.messagesDataBody = action.data;
            return store;
        case NEW_MESSAGES:
            let mess = {
                id: 1,
                message: action.data
            };
            store.messages.push(mess);
            store.messagesDataBody = '';
            return store;
        default:
            return store;
    }
};
export const actionNewMessages = (data) => ({type: NEW_MESSAGES, data: data});
export const actionDefaultMessages = (data) => ({type: UPDATE_DATA, data: data});



//const

let NEW_POST = 'NEW-POST';
let DEFAULT_TEXTAREA = 'DEFAULT-TEXTAREA';
let articlePage = {
    dataForPost: [
        {id: 3, text: 'Bro BROOOOOOO 3', like: 12},
    ],
    defaultForTextAreaPost: 'Bro',
};
export const reducerArticle = (store = articlePage, action,) => {
    debugger;
    switch (action.type) {
        case NEW_POST:
            let newPosts = {
                id: 4,
                text: action.data,
                like: 12
            };
            debugger;
            let copyStore={...store};
            copyStore.dataForPost=[...store.dataForPost];
            copyStore.dataForPost.push(newPosts);
            copyStore.defaultForTextAreaPost = '';
            return copyStore;
        case DEFAULT_TEXTAREA:
            let copyStore2={...store};
            copyStore2.defaultForTextAreaPost = action.data;
            return copyStore2;
        default :
            return store;
    }

};
//action for dispatcher for Post Article
export const actionNewPost = (data) => ({type: NEW_POST, data: data});
export const actionDefaultTextArea = (data) => ({type: DEFAULT_TEXTAREA, data: data});


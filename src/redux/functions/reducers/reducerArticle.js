//const

let NEW_POST = 'NEW-POST';
let DEFAULT_TEXTAREA = 'DEFAULT-TEXTAREA';
let  articlePage= {
    dataForPost: [
        {id: 3, text: 'Bro BROOOOOOO 3', like: 12},
    ],
        defaultForTextAreaPost: 'Bro',
};
export const reducerArticle = ( store=articlePage,action,) => {
    switch (action.type) {
        case NEW_POST:
            let newPosts = {
                id: 4,
                text: action.data,
                like: 12
            };
            store.dataForPost.push(newPosts);
            store.defaultForTextAreaPost = '';
            return store;
        case DEFAULT_TEXTAREA:
            store.defaultForTextAreaPost = action.data;
            return store;
        default :
            return store;
    }

};
//action for dispatcher for Post Article
export const actionNewPost = (data) => ({type: NEW_POST, data: data});
export const actionDefaultTextArea = (data) => ({type: DEFAULT_TEXTAREA, data: data});


//const
let NEW_POST = 'NEW-POST';
let DEFAULT_TEXTAREA = 'DEFAULT-TEXTAREA';

export const reducerArticle = (action, store) => {
    switch (action.type) {
        case NEW_POST:
            let newPosts = {
                id: 4,
                text: action.data,
                like: 12
            };
            store.dataForPost.push(newPosts);
            store.defaultForTextAreaPost = '';
            return;
        case DEFAULT_TEXTAREA:
            store.defaultForTextAreaPost = action.data;
            return;
        default :
            return;
    }

};
//action for dispatcher for Post Article
export const actionNewPost = (data) => ({type: NEW_POST, data: data});
export const actionDefaultTextArea = (data) => ({type: DEFAULT_TEXTAREA, data: data});


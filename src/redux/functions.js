import {renderFUN} from "./render";
import store from "./globalState";

export const storeFun = {
    // getNewPost(data) {
    //     let newPosts = {
    //         id: 4,
    //         text: data,
    //         like: 12
    //     };
    //     store.getGlobal().articlePage.dataForPost.push(newPosts);
    //     this.getDefaultForTextAreaPost('');
    //     renderFUN(store._global);
    //
    // },
    // getDefaultForTextAreaPost(data) {
    //     store.getGlobal().articlePage.defaultForTextAreaPost = data;
    //     console.log(store._global);
    //     renderFUN(store._global);
    // },

    dispatch(action) {
        debugger;
        if (action.type === 'NEW-POST') {
            let newPosts = {
                id: 4,
                text: action.data,
                like: 12
            };
            store.getGlobal().articlePage.dataForPost.push(newPosts);
            // this.getDefaultForTextAreaPost('');
            renderFUN(store._global);
        } else if (action.type === 'DEFAULT-TEXTAREA') {
            store.getGlobal().articlePage.defaultForTextAreaPost = action.data;
            console.log(store._global);
            renderFUN(store._global);
        }
    }

};



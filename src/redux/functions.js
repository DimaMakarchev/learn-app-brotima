import {renderFUN} from "./render";
import global from "./globalState";

export const getNewPost = (data) => {
    let newPosts = {
        id: 4,
        text: data,
        like: 12
    };
    global.articlePage.dataForPost.push(newPosts);
    getDefaultForTextAreaPost('');
    renderFUN(global);

};

export const getDefaultForTextAreaPost = (data) => {
    global.articlePage.defaultForTextAreaPost = data;
    console.log(global);
    renderFUN(global);

};

export const renderNew = (fun) => {
    fun();
};

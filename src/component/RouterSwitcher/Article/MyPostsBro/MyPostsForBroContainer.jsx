import React, {Component} from 'react';
import PostForBro from "./Post/PostForBro";
import {actionDefaultTextArea, actionNewPost} from "../../../../redux/functions/reducers/reducerArticle";
import MyPostsForBro from "./MyPostsForBro";

let refPost = React.createRef();

export const MyPostsForBroContainer = ({store}) => {

    let dataForPost = store.getState().articlePage.dataForPost;
    let defaultForTextAreaPost = store.getState().articlePage.defaultForTextAreaPost;

    let methodOnClick = (refPostAlert) => {
        store.dispatch(actionNewPost(refPostAlert));
        store.dispatch(actionDefaultTextArea(''));
    };

    let handlerOnChange = (refPostAlert) => {
        store.dispatch(actionDefaultTextArea(refPostAlert));
    };

    return (
        <>
            <MyPostsForBro dataForPost={dataForPost}
                           defaultForTextAreaPost={defaultForTextAreaPost}
                           methodOnClick={methodOnClick}
                           handlerOnChange={handlerOnChange}
            />
        </>
    );
}


export default MyPostsForBroContainer;

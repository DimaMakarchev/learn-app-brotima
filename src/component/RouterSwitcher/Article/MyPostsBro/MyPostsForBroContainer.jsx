import React from 'react';
import {actionDefaultTextArea, actionNewPost} from "../../../../redux/functions/reducers/reducerArticle";
import {connect} from "react-redux";
import {MyPostsForBro} from "./MyPostsForBro";


let mapStateToProps = (state) => {
    return {
        dataForPost: state.articlePage.dataForPost,
        defaultForTextAreaPost: state.articlePage.defaultForTextAreaPost,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        methodOnClick: (refPostAlert) => {
            dispatch(actionNewPost(refPostAlert));
            dispatch(actionDefaultTextArea(''));
        },
        handlerOnChange:(refPostAlert)=>{
            dispatch(actionDefaultTextArea(refPostAlert));
        }

    }
};

const MyPostsForBroContainer = connect(mapStateToProps,mapDispatchToProps)(MyPostsForBro);


export default MyPostsForBroContainer;

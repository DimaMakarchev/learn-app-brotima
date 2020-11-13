import React, {Component} from 'react';
import PostForBro from "./Post/PostForBro";
import {actionDefaultTextArea, actionNewPost} from "../../../../redux/functions/reducers/reducerArticle";

let refPost = React.createRef();

export const MyPostsForBro = ({
                                  dataForPost,
                                  defaultForTextAreaPost,
                                  methodOnClick,
                                  handlerOnChange
                              }) => {

    let methodOnClickMy = (e) => {
        e.preventDefault();
        methodOnClick(refPost.current.value);
    };

    let handlerOnChangeMy = (e) => {
        e.preventDefault();
        handlerOnChange(refPost.current.value);
    };

    return (
        <>
            <div>
                <div>POSTS FOR BRO</div>
                <fieldset>
                    <legend>Simple form</legend>
                    <label>Input data : <textarea ref={refPost} value={defaultForTextAreaPost}
                                                  onChange={handlerOnChangeMy} placeholder='in put data bro'/>

                    </label>
                    <label>
                        Email
                        <input type="email" name="email-address" required/>
                    </label>
                    <input type='submit' onClick={methodOnClickMy} value='SAVE BRO'/>
                    <button>REMOVE BRO</button>
                </fieldset>
            </div>
            {
                dataForPost.map(value => <PostForBro data={value}/>)
            }
        </>
    );
}


export default MyPostsForBro;

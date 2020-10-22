import React, {Component} from 'react';
import PostForBro from "./Post/PostForBro";
import {actionDefaultTextArea, actionNewPost} from "../../../../redux/functions/reducers/reducerArticle";

let refPost = React.createRef();

export const MyPostsForBroContainer = (props) => {

    let methodOnClick = (e) => {
        e.preventDefault();
        // let value = document.getElementById('bro').value;
        let refPostAlert = refPost.current.value;
        props.dispatch(actionNewPost(refPostAlert));
        // debugger;
        props.dispatch(actionDefaultTextArea(''));
    };

    let handlerOnChange = (e) => {
        e.preventDefault();
        let refPostAlert = e.target.value;
        // let refPostAlert = refPost.current.value;
        console.log(refPostAlert);
        props.dispatch(actionDefaultTextArea(refPostAlert));
    };

    return (
        <>
            <div>
                <div>POSTS FOR BRO</div>
                <fieldset>
                    <legend>Simple form</legend>
                    <label>Input data : <textarea ref={refPost} value={props.defaultForTextAreaPost}
                                                  onChange={handlerOnChange} placeholder='in put data bro'/>

                    </label>
                    <label>
                        Email
                        <input type="email" name="email-address" required/>
                    </label>
                    <input type='submit' onClick={methodOnClick} value='SAVE BRO'/>
                    <button>REMOVE BRO</button>
                </fieldset>
            </div>
            {
                props.dataForPost.map(value => <PostForBro data={value}/>)
            }
        </>
    );
}


export default MyPostsForBroContainer;

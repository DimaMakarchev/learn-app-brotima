import React, {Component} from 'react';
import PostForBro from "./Post/PostForBro";
import {actionDefaultTextArea, actionNewPost} from "../../../../redux/functions/reducers/reducerArticle";

let refPost = React.createRef();


class MyPostsForBro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dispatch: this.props.dispatch,
            checkBox: true,
        }
    }

    methodOnClick = (e) => {
        e.preventDefault();
        // let value = document.getElementById('bro').value;
        let refPostAlert = refPost.current.value;
        this.state.dispatch(actionNewPost(refPostAlert));
        debugger;
        this.state.dispatch(actionDefaultTextArea(''));
    };

    handlerOnChange = (e) => {
        e.preventDefault();
        debugger;
        let refPostAlert = e.target.value;
        // let refPostAlert = refPost.current.value;
        console.log(refPostAlert);
        this.state.dispatch(actionDefaultTextArea(refPostAlert));
    };

    handlerOnChangeFforCheckBox = (e) => {
        this.setState({checkBox: !this.state.checkBox});
        let checkBox = this.state.checkBox;
        alert(checkBox)
    };

    handlerOnChangeFforCheckBoxDate = (e) => {
        e.preventDefault();
        let refPostAlert = e.target.value;
        // let refPostAlert = refPost.current.value;
        alert(refPostAlert)
    };

    render() {
        const {dataForPost, defaultForTextAreaPost} = this.props.globalState;
        return (
            <>
                <div>
                    <div>POSTS FOR BRO</div>
                    <fieldset>
                        <legend>Simple form</legend>
                            <label>Input data : <textarea ref={refPost} value={defaultForTextAreaPost}
                                             onChange={this.handlerOnChange} placeholder='in put data bro' />

                            </label>
                        <label>
                            Email
                            <input type="email" name="email-address" required/>
                        </label>
                            <input type='submit' onClick={this.methodOnClick} value='SAVE BRO'/>
                            <button>REMOVE BRO</button>

                    </fieldset>
                    {/*<form>*/}
                    {/*    <label> Touch me <input type='checkbox' onChange={this.handlerOnChangeFforCheckBox}/>*/}
                    {/*    </label>*/}
                    {/*    <input type='email'/>*/}
                    {/*    <input type='date' onChange={this.handlerOnChangeFforCheckBoxDate}/>*/}
                    {/*    <input type='number'/>*/}
                    {/*    <input type='tel'/>*/}
                    {/*    <select>*/}
                    {/*        <option>day</option>*/}
                    {/*        <option>day</option>*/}
                    {/*        <option>day</option>*/}
                    {/*        <option>day</option>*/}
                    {/*    </select>*/}
                    {/*</form>*/}
                    {/*<input type='hidden'/>*/}
                    {/*<input type='file'/>*/}

                </div>
                {
                    dataForPost.map(value => <PostForBro data={value}/>)
                }
            </>
        );
    }
}

export default MyPostsForBro;

import React, {Component} from 'react';
import PostForBro from "./Post/PostForBro";

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
        this.state.dispatch({type: 'NEW-POST', data: refPostAlert});
        this.state.dispatch({type: 'DEFAULT-TEXTAREA', data: ''});
    };

    handlerOnChange = (e) => {
        e.preventDefault();
        debugger;
        let refPostAlert = e.target.value;
        // let refPostAlert = refPost.current.value;
        console.log(refPostAlert);
        this.state.dispatch({type: 'DEFAULT-TEXTAREA', data: refPostAlert});
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
                    <form>
                        <textarea ref={refPost} value={defaultForTextAreaPost}
                                  onChange={this.handlerOnChange}/>
                        <br/>
                        <button onClick={this.methodOnClick}>SAVE BRO</button>
                        <button>REMOVE BRO</button>
                    </form>
                    <form>
                        <label> Touch me <input type='checkbox' onChange={this.handlerOnChangeFforCheckBox}/>
                        </label>
                        <input type='email'/>
                        <input type='date' onChange={this.handlerOnChangeFforCheckBoxDate}/>
                        <input type='number'/>
                        <input type='tel'/>
                    </form>

                </div>
                {
                    dataForPost.map(value => <PostForBro data={value}/>)
                }
            </>
        );
    }
}

export default MyPostsForBro;

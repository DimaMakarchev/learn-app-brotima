import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Article from "./component/RouterSwitcher/Article/Article";
import Messages from "./component/RouterSwitcher/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./component/setting/Settings";
import News from "./component/RouterSwitcher/News/News";

const ArticleRender = () => <Article/>;
const MessagesRender = () => <Messages/>;

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const globalState = this.props.globalState;
        return (
            <BrowserRouter>
                <div className='grid_wrapper'>
                    <Header/>
                    <Nav/>
                    <div>
                        <Route path='/article' render={() => <Article globalState={globalState.articlePage}
                                                                      dispatch={this.props.dispatch}
                        />}
                        />
                        <Route path='/messages' render={() => <Messages
                            globalState={globalState.messagesPage}
                            dispatch={this.props.dispatch}
                        />}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        {/*<Route path='/music' component={Music} />*/}
                    </div>
                </div>
            </BrowserRouter>

        );
    };
}

export default App;



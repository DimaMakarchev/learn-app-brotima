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

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='grid_wrapper'>
                <Header/>
                <Nav/>
                <div>
                    <Route path='/article'
                           render={() => <Article
                               articlePage={props.state.articlePage}
                               dispatch={props.dispatch}
                           />}
                    />
                    <Route path='/messages' render={() => <Messages
                        messagesPage={props.state.messagesPage}
                        dispatch={props.dispatch}
                    />}
                    />

                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    {/*<Route path='/music' component={Music} />*/}
                </div>
            </div>
        </BrowserRouter>

    );

    ;
}

export default App;



import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Article from "./component/RouterSwitcher/Article/Article";
import Messages from "./component/RouterSwitcher/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./component/setting/Settings";
import News from "./component/RouterSwitcher/News/News";
import PropTypes from "prop-types";
import {store} from "./redux/reduxNew";
import MessagesContainer from "./component/RouterSwitcher/Messages/MessagesContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className='grid_wrapper'>
                <Header/>
                <Nav/>
                <div>
                    <Route path='/article' render={() => <Article/>}/>
                    <Route path='/messages' render={() => <MessagesContainer />}/>
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



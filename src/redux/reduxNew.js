import {combineReducers, createStore} from "redux";
import {reducerArticle} from "./functions/reducers/reducerArticle";
import {reducerMessages} from "./functions/reducers/reducerMessages";

let reducers = combineReducers({
    articlePage: reducerArticle,
    messagesPage: reducerMessages,
});

export const store = createStore(reducers);

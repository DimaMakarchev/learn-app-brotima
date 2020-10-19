import {renderFUN} from "../render";
import store from "../state/globalState";
import {reducerArticle} from "./reducers/reducerArticle";
import {reducerMessages} from "./reducers/reducerMessages";

export const dispatchFun = {
    dispatch(action) {
        reducerArticle(action, store.getGlobal().articlePage);
        reducerMessages(action, store.getGlobal().messagesPage);
        renderFUN()
    }
};

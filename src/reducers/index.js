import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedInReducer from "./login";
import postsReducer from "./posts";

const allReducer = combineReducers({
    counter : counterReducer,
    isLogged : loggedInReducer,
    posts: postsReducer
});

export default allReducer;


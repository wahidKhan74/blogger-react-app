import { combineReducers } from "redux";
import categoriesReducer from "./category";
import counterReducer from "./counter";
import loggedInReducer from "./login";
import postsReducer from "./posts";

const rootReducer = combineReducers({
    counter : counterReducer,
    isLogged : loggedInReducer,
    posts: postsReducer,
    categories: categoriesReducer
});

export default rootReducer;


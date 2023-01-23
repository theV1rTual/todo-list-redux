import {createStore} from "redux";
import todoListReducer from "./todoListReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(todoListReducer, composeWithDevTools())

export default store;
import {createStore} from "redux";
import todoListReducer from "./todoListReducer";

const store = createStore(todoListReducer)

export default store;
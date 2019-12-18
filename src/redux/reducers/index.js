import { combineReducers } from "redux";
import comments from "./comments";
import concerts from "./concerts";

const rootReducer = combineReducers({ concerts, comments });

export default rootReducer;

import { combineReducers } from "redux";
import { i18nReducer } from "react-redux-i18n";
import comments from "./comments";
import concerts from "./concerts";

const rootReducer = combineReducers({ i18n: i18nReducer, concerts, comments });

export default rootReducer;

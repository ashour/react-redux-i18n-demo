import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from "react-redux-i18n";
import rootReducer from "./reducers/index";
import translations from "../l10n/translations";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale("en"));

export default store;

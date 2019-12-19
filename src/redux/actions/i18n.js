import { setLocale } from "react-redux-i18n";
import { supportedLocales, fallbackLocale } from "../../config/i18n";

export function setLocaleWithFallback(desiredLocale) {
  const finalLocale = Object.keys(supportedLocales).includes(desiredLocale)
    ? desiredLocale
    : fallbackLocale;

  return dispatch => dispatch(setLocale(finalLocale));
}

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import languageEN from "./locate/en/translate.json";
import languageJP from "./locate/jp/translate.json";
import languageDE from "./locate/de/translate.json";
import languageFR from "./locate/fr/translate.json";
import languagePT from "./locate/pt/translate.json";

// console.log("Current Language", i18n.changeLanguage());

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: languageEN,
      pt: languagePT,
      de: languageDE,
      fr: languageFR,
      ja: languageJP,
    },
    /* default language when load the website in browser */
    // lng: "en",
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: "en",

    // fallbackLng: {
    //   "en-GB": ["en"],
    //   "de-CH": ["fr"],
    //   "zh-Hant": ["en"],
    //   "en-US": ["en"],
    //   default: ["en"],
    // },

    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default",
    },
    // load: "languageOnly",
    whitelist: ["de", "en", "fr", "pt", "ja"],
  });

export default i18n;

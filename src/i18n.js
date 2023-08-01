import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationUS from './locales/us/translationUS.json'
import translationTR from './locales/tr/translationTR.json'
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            TR: {
                translation: translationTR
            },
            US: {
                translation: translationUS
            },
        },
        lng: "TR",
        fallbackLng: "TR",
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

export default i18n;
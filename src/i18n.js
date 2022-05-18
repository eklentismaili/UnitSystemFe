import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: {
          home: {
            title: "Hello I am Eklent Ismaili",
            subtitle:
              "This is a simple web application simulation with different features such as:",
            features: {
              auth: "Authentication using ReqRes fake API",
              protected: "Protected Routes based on authentication status",
              table: "Table data pagination and filtering using JSON SERVER",
              crud: "CRUD Operations on users and users tasks tables",
              theme: "Light/Dark Theme",
              localization: "It/En Localization",
            },
            info: "To see the full run of this project:",
            steps: {
              1: "Install UnitSystemFe repo and then run:",
              2: "Login with:",
            },
          },
        },
      },
      it: {
        translation: {
          home: {
            title: "Ciao sono Eklent Ismaili",
            subtitle:
              "Questa è una semplice simulazione di un'applicazione web con diverse funzionalità come:",
            features: {
              auth: "Autenticazione tramite falsa API ReqRes",
              protected: "Rotte protette in base allo stato di autenticazione",
              table:
                "Impaginazione e filtraggio dei dati delle tabelle tramite JSON SERVER",
              crud: "CRUD Operazioni su utenti e compiti di utenti",
              theme: "Light/Dark Theme",
              localization: "It/En Localizzazione",
            },
            info: "Per vedere l'esecuzione completa di questo progetto:",
            steps: {
              1: "Installa il repository UnitSystemFe e run:",
              2: "Entra con:",
            },
          },
        },
      },
    },
  });

export default i18n;

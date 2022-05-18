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
          register: {
            title: "Welcome to Vital",
            subtitle:
              "Enter your mobile number we will send you the OTP to verify later.",
            verification_button: "Send verification code",
            change_nr: "Change Number ?",
          },
          verify: {
            title: "Verify OTP",
            subtitle_p1: "We have sent you an SMS on",
            subtitle_p2: "with 6 digit verification code.",
            countdown: "Countdown",
            continue: "Continue",
          },
          introduction: {
            title1: "Online Pharmacy",
            title2: "Fast Delivery",
            subtitle1:
              "You can buy medicines, Healthcare Products and more here.",
            subtitle2:
              "Your medicines and healthcare products will be delivered very fast by our staff",
            skip: "Skip",
          },
          home: {
            title1: "Online Pharmacy",
            title2: "Fast Delivery",
            subtitle1:
              "You can buy medicines, Healthcare Products and more here.",
            subtitle2:
              "Your medicines and healthcare products will be delivered very fast by our staff",
            skip: "Skip",
          },
        },
      },
      it: {
        translation: {
          register: {
            title: "Mireserdhet ne Vital",
            subtitle:
              "Vendosni numrin e telefonit e do ju dergojme OTP ta verifikojme me vone",
            verification_button: "Dergo kodin e verifikimit",
            change_nr: "Ndrysho Numrin ?",
          },
          verify: {
            title: "Verifiko OTP",
            subtitle_p1: "Ju kemi derguar nje kod verifikimi ne SMS",
            subtitle_p2: "me 6 shkronja",
            countdown: "Koha mbetur",
            continue: "Vazhdo",
          },
          introduction: {
            title1: "Farmaci Online",
            title2: "Dergim i Shpejte",
            subtitle1:
              "Ketu mund te blini ilace, produkte kujdesi dhe me shume.",
            subtitle2: "Porosia juaj dergohet tek ju nga stafi yne",
            skip: "Vazhdo",
          },
        },
      },
    },
  });

export default i18n;

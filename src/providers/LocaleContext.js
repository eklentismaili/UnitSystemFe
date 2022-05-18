import { useState, createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState({
    label: <img />,
    value: "en",
  });

  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang.value);
    setLocale(lang);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        changeLanguageHandler,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;

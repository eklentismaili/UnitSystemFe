import { useState, createContext, useEffect } from "react";

export const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState({
    label: <img />,
    value: "en",
  });

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;

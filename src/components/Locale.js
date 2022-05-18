import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import en from "../assets/images/england.png";
import it from "../assets/images/italy.png";
import { LocaleContext } from "../providers/LocaleContext";

const options = [
  { value: "en", label: <img src={en} height="40px" width="40px" /> },
  { value: "it", label: <img src={it} height="40px" width="40px" /> },
];

const customStyles = {
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#007bff" : "#222831",
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "5%",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function Locale() {
  const { locale, setLocale } = useContext(LocaleContext);

  useEffect(() => {
    setLocale(options[0]);
  }, []);

  return (
    <div>
      <Select
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        isSearchable={false}
        styles={customStyles}
        defaultValue={options[0]}
        onChange={setLocale}
        options={options}
      />
    </div>
  );
}

export default Locale;

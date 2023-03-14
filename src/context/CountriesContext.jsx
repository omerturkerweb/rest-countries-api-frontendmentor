import { createContext, useState } from "react";
import CountriesJSON from "../api/data.json";

export const CountriesContext = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState(CountriesJSON);
  const [filterText, setFilterText] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const data = {
    theme,
    setTheme,
    searchText,
    setSearchText,
    countries,
    setCountries,
    selectedCountry,
    setSelectedCountry,
    filterText,
    setFilterText,
  };
  return (
    <CountriesContext.Provider value={data}>
      {children}
    </CountriesContext.Provider>
  );
};

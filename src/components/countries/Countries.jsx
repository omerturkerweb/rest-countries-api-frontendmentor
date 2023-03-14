import { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import Country from "../country/Country";
import SelectedCountry from "../country/SelectedCountry";

export default function Countries() {
  const { countries, searchText, selectedCountry } =
    useContext(CountriesContext);

  return (
    <div className="countries flex flex-row items-center justify-start flex-wrap gap-x-10">
      {selectedCountry !== "" ? (
        <SelectedCountry country={selectedCountry} />
      ) : searchText !== "" ? (
        countries
          .filter((country) =>
            country.name.toLowerCase().startsWith(searchText.toLowerCase())
          )
          .map((country, index) => {
            return <Country key={index} country={country} />;
          })
      ) : (
        countries.map((country, index) => {
          return <Country key={index} country={country} />;
        })
      )}
    </div>
  );
}

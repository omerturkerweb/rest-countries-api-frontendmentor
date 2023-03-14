import { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import BackButton from "../layout/BackButton";
import { NumberCalculate } from "../../helpers/NumberCalculate";

export default function SelectedCountry({ country }) {
  const { countries } = useContext(CountriesContext);
  const selectedCountry = countries.filter(
    (c) => c.name.toLowerCase() === country.toLowerCase()
  )[0];

  return (
    <div className="selected-country-main">
      <BackButton />
      <div className="selected-country my-10 flex flex-row justify-center gap-x-20">
        <img
          alt={selectedCountry.name}
          className="w-[420px] h-[300px] rounded-md"
          src={selectedCountry.flags.png}
        ></img>
        <div className="selected-country-titles">
          <h3 className="font-[600] text-[32px] my-4">
            {selectedCountry.name}
          </h3>
          <div className="selected-country-description-main flex flex-row gap-x-20">
            {" "}
            <div className="selected-country-primary-description">
              {" "}
              <div className="selected-country-description flex flex-col gap-y-1">
                <div className="native-name flex flex-row items-center gap-x-2">
                  <h3>Native Name: </h3>
                  <span className="text-[var(--very-light-gray)] text-[14px]">
                    {selectedCountry.nativeName}
                  </span>
                </div>
                <div className="population flex flex-row items-center gap-x-2">
                  <h3>Population : </h3>
                  <span className="text-[var(--very-light-gray)] text-[14px]">
                    {<NumberCalculate number={selectedCountry.population} />}
                  </span>
                </div>
                <div className="population flex flex-row items-center gap-x-2">
                  <h3>Sub Region : </h3>
                  <span className="text-[var(--very-light-gray)] text-[14px]">
                    {selectedCountry.subregion}
                  </span>
                </div>
                <div className="population flex flex-row items-center gap-x-2">
                  <h3>Capital : </h3>
                  <span className="text-[var(--very-light-gray)] text-[14px]">
                    {selectedCountry.capital}
                  </span>
                </div>
              </div>
            </div>
            <div className="selected-country-secondary-description">
              <div className="top-level-domain flex flex-row items-center gap-x-2">
                <h3>Top Level Domain : </h3>
                <span className="text-[var(--very-light-gray)] text-[14px]">
                  {selectedCountry.topLevelDomain[0]}
                </span>
              </div>
              <div className="top-level-domain flex flex-row items-center gap-x-2">
                <h3>Currencies : </h3>
                <span className="text-[var(--very-light-gray)] text-[14px]">
                  {selectedCountry.currencies[0].name}
                </span>
              </div>
              <div className="languages flex flex-row items-center gap-x-2">
                <h3>Languages : </h3>
                <span className="text-[var(--very-light-gray)] text-[14px]">
                  {selectedCountry.languages.map((lang) => `${lang.name} `)}
                </span>
              </div>
            </div>
          </div>
          <div className="border-countries mt-10 flex flex-row gap-x-1">
            <span>Border Countries: </span>
            <div className="borders">
              {selectedCountry.borders ? (
                selectedCountry.borders.map((border, index) => (
                  <span
                    className="border bg-[var(--dark-blue)] mx-1 py-[5px] px-8 rounded-md text-[var(--white] text-[13px]"
                    key={index}
                  >
                    {border}
                  </span>
                ))
              ) : (
                <p className="no-border bg-[var(--dark-blue)] mx-1 py-[5px] px-8 rounded-md text-[var(--white] text-[13px] flex justify-center">
                  this country doesn't have any border country/ies
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

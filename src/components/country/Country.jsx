import { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import { NumberCalculate } from "../../helpers/NumberCalculate";
export default function Country({ country }) {
  const { setSelectedCountry, filterText } = useContext(CountriesContext);

  return (
    <>
      {filterText ? (
        country.region.toLowerCase() !== filterText.toLowerCase() ? null : (
          <div
            onClick={() => {
              setSelectedCountry(country.name.toLowerCase());
            }}
            className="country w-[22%] group overflow-hidden transition-all duration-500 cursor-pointer h-[350px] rounded-md mb-10 bg-[var(--dark-blue)]"
          >
            <img
              alt={country.name}
              className="country-flag h-[180px] w-full rounded-t-md transition-all duration-500 group-hover:scale-[1.03]"
              src={country.flags.png}
            ></img>

            <div className="country-description p-3">
              <h3 className="font-[600] py-2">{country.name}</h3>
              <div className="population flex flex-row gap-x-1 font-[14px]">
                <span className="desc-title text-[15px]">Population:</span>
                <p className="desc-result text-[var(--very-light-gray)] text-[14px]">
                  {<NumberCalculate number={country.population} />}
                </p>
              </div>{" "}
              <div className="region flex flex-row gap-x-1">
                <span className="desc-title text-[15px]">Region:</span>
                <p className="desc-result text-[var(--very-light-gray)] text-[14px]">
                  {country.region}
                </p>
              </div>
              <div className="capital flex flex-row gap-x-1">
                <span className="desc-title text-[15px]">Capital:</span>
                <p className="desc-result text-[var(--very-light-gray)] text-[14px]">
                  {country.capital ? country.capital : "-unknown-"}
                </p>
              </div>
            </div>
          </div>
        )
      ) : (
        <div
          onClick={() => {
            setSelectedCountry(country.name.toLowerCase());
          }}
          className="country w-[22%] group overflow-hidden transition-all duration-500 cursor-pointer h-[350px] rounded-md mb-10 bg-[var(--dark-blue)]"
        >
          <img
            alt={country.name}
            className="country-flag h-[180px] w-full rounded-t-md transition-all duration-500 group-hover:scale-[1.03]"
            src={country.flags.png}
          ></img>

          <div className="country-description p-3">
            <h3 className="font-[600] py-2">{country.name}</h3>
            <div className="population flex flex-row gap-x-1 font-[14px]">
              <span className="desc-title text-[15px]">Population:</span>
              <p className="desc-result text-[var(--very-light-gray)] text-[14px]">
                {<NumberCalculate number={country.population} />}
              </p>
            </div>{" "}
            <div className="region flex flex-row gap-x-1">
              <span className="desc-title text-[15px]">Region:</span>
              <p className="desc-result text-[var(--very-light-gray)] text-[14px]">
                {country.region}
              </p>
            </div>
            <div className="capital flex flex-row gap-x-1">
              <span className="desc-title text-[15px]">Capital:</span>
              <p className="desc-result text-[var(--very-light-gray)] text-[14px]">
                {country.capital ? country.capital : "-unknown-"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

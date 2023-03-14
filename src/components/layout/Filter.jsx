import { AiOutlineArrowDown } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
export default function Search() {
  const { filterText, setFilterText, theme } = useContext(CountriesContext);
  return (
    <>
      <div className="filter-country group relative w-[12%] cursor-pointer p-3 my-6 py-3 rounded-sm flex flex-row items-center justify-start gap-3 bg-[var(--dark-blue)] mr-10">
        <span className="text-sm flex items-center gap-x-3">
          {`${
            filterText !== ""
              ? filterText.charAt(0).toUpperCase() + filterText.slice(1)
              : "Filter by Region"
          }`}{" "}
          {filterText !== "" ? (
            <CgClose
              onClick={() => {
                setFilterText("");
              }}
              className="absolute right-4"
            />
          ) : (
            <AiOutlineArrowDown
              color={theme === "dark" ? null : "grey"}
              className="absolute right-4"
            />
          )}
        </span>
        <div className="filters absolute top-[50px] right-0 flex flex-col p-3 justify-start opacity-0 invisible group-hover:opacity-100 group-hover:visible  bg-[var(--dark-blue)] z-10 transition-all duration-300 w-[100%] rounded-md">
          {["Africa", "Americas", "Asia", "Europe", "Oceania"].map(
            (region, index) => {
              return (
                <span
                  onClick={() => {
                    setFilterText(region.toLowerCase());
                  }}
                  className="m-1"
                  key={index}
                >
                  {region}
                </span>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

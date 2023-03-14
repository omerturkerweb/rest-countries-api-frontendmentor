import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CountriesContext } from "../../context/CountriesContext";
export default function Search() {
  const { searchText, setSearchText, theme } = useContext(CountriesContext);

  return (
    <div className="search-country  w-[25%] p-3 my-6 py-2 rounded-sm flex flex-row items-center justify-start gap-3 bg-[var(--dark-blue)] ">
      <span>
        <AiOutlineSearch color={theme === "dark" ? null : "grey"} />
      </span>
      <input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        className="outline-none  bg-transparent placeholder:text-sm w-[90%]"
        type="text"
        placeholder="Search for a country"
      ></input>
    </div>
  );
}

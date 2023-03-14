import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { CountriesContext } from "../../context/CountriesContext";

export default function BackButton() {
  const { setSelectedCountry, setSearchText } = useContext(CountriesContext);
  return (
    <button
      onClick={() => {
        setSelectedCountry("");
        setSearchText("");
      }}
      className="flex flex-row items-center justify-center gap-x-2 bg-[var(--dark-blue)] py-2 px-5 rounded-md"
    >
      <BiArrowBack />
      Back
    </button>
  );
}

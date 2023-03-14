import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { CountriesContext } from "../../context/CountriesContext";
export default function Header() {
  const { theme, setTheme } = useContext(CountriesContext);
  return (
    <header className="layout-header bg-[var(--dark-blue)] flex flex-row items-center justify-between p-4 px-24">
      <h3 className="font-[600]">Where is in the world?</h3>
      <span
        onClick={() => {
          setTheme((theme) => (theme === "dark" ? "light" : "dark"));
        }}
        className="set-mode flex flex-row items-center gap-x-2 cursor-pointer mr-12"
      >
        {theme === "dark" ? (
          <>
            <span>
              <MdDarkMode />
            </span>
            <p>Dark Mode</p>
          </>
        ) : (
          <>
            <span>
              <BsLightbulb />
            </span>
            <p>Light Mode</p>
          </>
        )}
      </span>
    </header>
  );
}

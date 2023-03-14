import Header from "./Header";
import Filter from "./Filter";
import Search from "./Search";
import Countries from "../countries/Countries";
import { useContext, useEffect } from "react";
import { CountriesContext } from "../../context/CountriesContext";

export default function Layout() {
  const { theme } = useContext(CountriesContext);
  useEffect(() => {
    const body = document.querySelector("body");
    const root = document.querySelector("#root");
    root.classList.toggle("dark");
    body.classList.toggle("dark");
  }, [theme]);
  return (
    <>
      <Header />
      <div className="content px-24">
        <div className="actions flex flex-row items-center justify-between">
          <Search />
          <Filter />
        </div>

        <Countries />
      </div>
    </>
  );
}

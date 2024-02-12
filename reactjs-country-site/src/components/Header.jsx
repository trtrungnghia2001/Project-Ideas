import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    const res = JSON.parse(localStorage.getItem("reactjs-country-site-theme"));
    return res ? res : false;
  });
  useEffect(() => {
    theme
      ? document.querySelector("body").setAttribute("data-theme", "")
      : document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("reactjs-country-site-theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <div className="bg-[--itemBg] sticky left-0 top-0 w-full shadow-md">
      <div className="container flex gap-8 items-center justify-between">
        <Link to={"/"}>
          <h3>Where in the wrold?</h3>
        </Link>
        <button
          className="font-semibold flex items-center gap-2"
          onClick={() => setTheme(!theme)}
        >
          {theme ? (
            <>
              <FaMoon /> Dark Mode
            </>
          ) : (
            <>
              <FaSun /> Light Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;

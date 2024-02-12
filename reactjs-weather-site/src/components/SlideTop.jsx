import React from "react";
import SearchTerm from "./SearchTerm";
import { getLocationCurrent, getMonthName } from "app/utils";
import { IoMdAdd } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
import { useAppContext } from "app/context";
import { useNavigate } from "react-router-dom";

const SlideTop = () => {
  const { weather, handleClickAddWeather, setToggle, setLocation } =
    useAppContext();
  const navigate = useNavigate();
  async function handleCliclCurrentLocation() {
    const res = await getLocationCurrent();
    setLocation(res);
    navigate("/");
  }

  return (
    <div>
      <div className="flex gap-8 items-center justify-between">
        <div className="hidden sm:block">
          <h3>
            {getMonthName(new Date().toString())} {new Date().getFullYear()}
          </h3>
          <span className="text-[--textSoftColor]">
            {new Date().toDateString()}
          </span>
        </div>
        <div className="sm:max-w-[300px] w-full flex items-center justify-between gap-4">
          <div className="flex-1">
            <SearchTerm />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                handleClickAddWeather(
                  weather?.currentWeather?.id,
                  weather?.currentWeather?.coord?.lat,
                  weather?.currentWeather?.coord?.lon
                )
              }
            >
              <IoMdAdd />
            </button>
            <button onClick={handleCliclCurrentLocation}>
              <MdMyLocation />
            </button>
            <button className="block xl:hidden" onClick={() => setToggle(true)}>
              <HiBars3 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideTop;

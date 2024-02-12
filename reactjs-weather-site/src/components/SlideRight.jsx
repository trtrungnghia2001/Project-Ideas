import { useAppContext } from "app/context";
import {
  changeFtoC,
  getTimeName,
  getTimeZone,
  getTimeZoneName,
  getWeekDayName,
} from "app/utils";
import React, { memo } from "react";
import { PiSunHorizonFill, PiSunFill } from "react-icons/pi";
import WeatherDetail from "./WeatherDetail";

const SlideRight = () => {
  const { weather } = useAppContext();

  return (
    <div className="bg-[--grey] p-6 w-full h-full">
      {/* weather current */}
      <WeatherDetail weather={weather.currentWeather}/>
      <hr className="my-4" />
      {/* Chance of rain */}
      <div>
        <h4>Chance of rain</h4>
        <div className="mt-4 flex flex-col gap-4">
          {weather?.forecastWeather?.list
            ?.filter((iten, index) => index % 8 === 0)
            ?.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-4">
                  <span>{getWeekDayName(item?.dt_txt, "short")}</span>
                  <div className="bg-[rgb(69,104,155)] w-full h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[rgb(140,177,252)]"
                      style={{
                        width: weather?.currentWeather?.clouds?.all + "%",
                      }}
                    ></div>
                  </div>
                  <span>{weather?.currentWeather?.clouds?.all}%</span>
                </div>
              );
            })}
        </div>
      </div>
      <hr className="my-4" />
      {/* Sunrise & Sunset */}
      <div>
        <h4>Sunrise & Sunset</h4>
        <div className="mt-4 flex items-center justify-between p-4 bg-[--itemBg] rounded">
          <div className="flex gap-2 items-center">
            <PiSunFill className="icon" />
            <div>
              <span className="text-[--textSoftColor]">Sunrise</span>
              <h3>
                {getTimeZoneName(
                  weather?.currentWeather?.sys?.sunrise,
                  weather?.currentWeather?.timezone
                )}
              </h3>
            </div>
          </div>
          <span className="text-[--textSoftColor]">
            {Math.abs(
              new Date().getUTCHours() -
                getTimeZone(
                  weather?.currentWeather?.sys?.sunrise,
                  weather?.currentWeather?.timezone
                ).getUTCHours()
            )}{" "}
            hours ago
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between p-4 bg-[--itemBg] rounded">
          <div className="flex gap-2 items-center">
            <PiSunHorizonFill className="icon" />
            <div>
              <span className="text-[--textSoftColor]">Sunset</span>
              <h3>
                {getTimeZoneName(
                  weather?.currentWeather?.sys?.sunset,
                  weather?.currentWeather?.timezone
                )}
              </h3>
            </div>
          </div>
          <span className="text-[--textSoftColor]">
            in{" "}
            {Math.abs(
              new Date().getHours() -
                getTimeZone(
                  weather?.currentWeather?.sys?.sunset,
                  weather?.currentWeather?.timezone
                ).getHours()
            )}{" "}
            hours
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(SlideRight);

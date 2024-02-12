import { changeFtoC, getTimeName } from "app/utils";
import React from "react";

const WeatherDetail = ({ weather }) => {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{weather?.name}</h3>
          <span className="text-[--textSoftColor]">
            {weather?.sys?.country}
          </span>
        </div>
        <h4 className="font-semibold">{getTimeName(new Date())}</h4>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div>
          <p className=" text-[.75rem] text-[--textSoftColor]">
            <span className="font-semibold">Feels like: </span>
            {changeFtoC(weather?.main?.feels_like)}
            <sup>o</sup>C
          </p>
          <h1 className="font-semibold">
            {changeFtoC(weather?.main?.temp)}
            <sup>o</sup>C
          </h1>
          <p className="capitalize">
            {weather?.weather?.[0]?.description}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
          alt=""
        />
      </div>
    </div>
  );
};

export default WeatherDetail;

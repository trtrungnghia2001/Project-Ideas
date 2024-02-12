import { changeFtoC } from "app/utils";
import React, { useMemo } from "react";
import { BsCloudLightningRainFill } from "react-icons/bs";
import {
  FaEarthAsia,
  FaEarthOceania,
  FaTemperatureArrowDown,
  FaTemperatureArrowUp,
} from "react-icons/fa6";
import { PiWaves, PiWind } from "react-icons/pi";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

const TodayOverview = ({ weather }) => {
  const overview = useMemo(() => {
    const newData = [
      {
        title: "Wind Sqeed",
        icon: <PiWind />,
        value: weather?.currentWeather?.wind?.speed,
        unit: "km/h",
        compare:
          weather?.currentWeather?.wind?.speed -
          weather?.forecastWeather?.list[2]?.wind?.speed,
      },
      {
        title: "Rain Chanse",
        icon: <BsCloudLightningRainFill />,
        value: weather?.currentWeather?.clouds?.all,
        unit: "%",
        compare:
          weather?.currentWeather?.clouds.all -
          weather?.forecastWeather?.list[2]?.clouds?.all,
      },
      {
        title: "pressure",
        icon: <PiWaves />,
        value: weather?.currentWeather?.main?.pressure,
        unit: "hpa",
        compare:
          weather?.currentWeather?.main?.pressure -
          weather?.forecastWeather?.list[2]?.main?.pressure,
      },
      {
        title: "humidity",
        icon: <WiHumidity />,
        value: weather?.currentWeather?.main?.humidity,
        unit: "%",
        compare:
          weather?.currentWeather?.main?.humidity -
          weather?.forecastWeather?.list[2]?.main?.humidity,
      },
      {
        title: "Temp Max",
        icon: <FaTemperatureArrowUp />,
        value: changeFtoC(weather?.currentWeather?.main?.temp_max),
        unit: "<sup>o</sup>",
        compare:
          changeFtoC(weather?.currentWeather?.main?.temp_max) -
          changeFtoC(weather?.forecastWeather?.list[2]?.main?.temp_max),
      },
      {
        title: "Temp Min",
        icon: <FaTemperatureArrowDown />,
        value: changeFtoC(weather?.currentWeather?.main?.temp_min),
        unit: "<sup>o</sup>",
        compare:
          changeFtoC(weather?.currentWeather?.main?.temp_min) -
          changeFtoC(weather?.forecastWeather?.list[2]?.main?.temp_min),
      },
      {
        title: "grnd_level",
        icon: <FaEarthAsia />,
        value: weather?.currentWeather?.main?.grnd_level,
        unit: "hpa",
        compare:
          weather?.currentWeather?.main?.grnd_level -
          weather?.forecastWeather?.list[2]?.main?.grnd_level,
      },
      {
        title: "sea_level",
        icon: <FaEarthOceania />,
        value: weather?.currentWeather?.main?.sea_level,
        unit: "hpa",
        compare:
          weather?.currentWeather?.main?.sea_level -
          weather?.forecastWeather?.list[2]?.main?.sea_level,
      },
    ];
    return newData;
  }, [weather]);
  
  return (
    <div>
      <h4>Today overview</h4>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {overview.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[--itemBg] p-6 rounded-lg flex gap-4 items-center justify-between"
            >
              <div className="flex gap-6 items-center">
                <span className="icon text-[--blueColor]">{item?.icon}</span>
                <div>
                  <span className="text-[--textSoftColor] capitalize">
                    {item?.title}
                  </span>
                  <h2>
                    {item?.value}
                    <span
                      dangerouslySetInnerHTML={{ __html: item?.unit }}
                    ></span>
                  </h2>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                {item?.compare > 0 ? (
                  <RiArrowUpSFill className="text-[--blueColor]" />
                ) : (
                  <RiArrowDownSFill className="text-[--redColor]" />
                )}
                <p className="text-[--textSoftColor]">
                  {item?.compare > 1
                    ? Math.abs(item?.compare?.toFixed(0))
                    : Math.abs(item?.compare?.toFixed(2))}
                  <span dangerouslySetInnerHTML={{ __html: item?.unit }}></span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodayOverview;

import React, { memo, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { changeFtoC, getTimeName } from "app/utils";
import { FaLocationArrow } from "react-icons/fa6";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 10,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};
const WindAndTemp = ({ weather }) => {
  const weatherHour = useMemo(() => {
    const newData = weather?.forecastWeather?.list?.map((item, index) => item);
    return newData;
  }, [weather]);
  return (
    <div className="w-full">
      <h4>Wind & Temperature</h4>
      <div className="mt-4 w-full overflow-auto cursor-pointer">
        <Slider {...settings}>
          {weatherHour?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 px-2">
                {/* Temperature */}
                <div className="p-2 mb-4 rounded bg-[--itemBg] flex flex-col gap-2 items-center">
                  <span className="text-[.75rem] text-[--textSoftColor]">
                    {getTimeName(item?.dt_txt)?.replace(":00", "")}
                  </span>
                  <img
                    src={`https://openweathermap.org/img/wn/${item?.weather?.[0]?.icon}.png`}
                    alt=""
                    draggable={false}
                  />
                  <span>
                    {changeFtoC(item?.main?.temp)}
                    <sup>o</sup>
                  </span>
                </div>
                {/* Wind */}
                <div className="p-2 rounded bg-[--itemBg] flex flex-col gap-2 items-center">
                  <span className="text-[.75rem] text-[--textSoftColor]">
                    {getTimeName(item?.dt_txt)?.replace(":00", "")}
                  </span>
                  <div className="my-2">
                    <FaLocationArrow
                      className="icon text-[--blueColor]"
                      style={{ rotate: 360 - item?.wind?.deg + 45 + "deg" }}
                    />
                  </div>
                  <span>
                    {item?.wind?.speed.toFixed(1)}
                    km/h
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default memo(WindAndTemp);

import { getCurrentWeather } from "app/apis";
import { useAppContext } from "app/context";
import { changeFtoC, getTimeName } from "app/utils";
import WeatherDetail from "components/WeatherDetail";
import { useEffect, useState } from "react";
import { MdMyLocation } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SavedLocationPage = () => {
  const {
    handleClickDeleteWeather,
    dataWeatherList,
    setIsLoading,
    setLocation,
  } = useAppContext();
  const navigate = useNavigate();
  const [weatherSavedList, setWeatherSavedList] = useState([]);
  // weatherList
  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);
        const res = await Promise.all(
          dataWeatherList.map(async (url) => await getCurrentWeather(url))
        );
        setWeatherSavedList(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, [dataWeatherList]);

  function handleClickChangeLocation(lat, lon) {
    setLocation({ lat, lon });
    navigate("/");
  }
  
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {weatherSavedList.length > 0 ? (
        weatherSavedList?.map((item) => {
          return (
            <div key={item?.id} className="p-4 bg-[--itemBg] rounded">
              <div className="flex items-center gap-4 justify-end mb-4">
                <button
                  onClick={() =>
                    handleClickChangeLocation(
                      item?.coord?.lat,
                      item?.coord?.lon
                    )
                  }
                >
                  <MdMyLocation />
                </button>
                <button onClick={() => handleClickDeleteWeather(item?.id)}>
                  <RiSubtractFill />
                </button>
              </div>
              <WeatherDetail weather={item} />
            </div>
          );
        })
      ) : (
        <p>No Weather Saved!</p>
      )}
    </div>
  );
};

export default SavedLocationPage;

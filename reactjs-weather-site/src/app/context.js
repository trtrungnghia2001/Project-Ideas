import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getAirPollution, getCurrentWeather, getForecastWeather } from "./apis";
import { init, reducer } from "./reducer";
import { toast } from "react-toastify";
import { getLocationCurrent } from "./utils";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  const [weather, setWeather] = useState([]);
  const [dataWeatherList, dispatch] = useReducer(reducer, init);
  // weather
  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);
        const currentWeather = await getCurrentWeather(location);
        const forecastWeather = await getForecastWeather(location);
        const airPollution = await getAirPollution(location);
        setWeather({ currentWeather, forecastWeather, airPollution });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, [location]);

  useEffect(() => {
    localStorage.setItem(
      "reactjs-weather-site-weatherSavedList",
      JSON.stringify(dataWeatherList)
    );
  }, [dataWeatherList]);

  // useEffect(() => {
  //   async function fetchApi() {
  //     const res = await getLocationCurrent();
  //     setLocation(res);
  //   }
  //   fetchApi();
  // }, []);

  // action
  function handleClickAddWeather(id, lat, lon) {
    dispatch({ type: "add_weather", id, lat, lon });
    toast.success("Added successfully!");
  }
  function handleClickDeleteWeather(id) {
    dispatch({ type: "delete_weather", id });
    toast.error("Deleted successfully!");
  }
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        toggle,
        setToggle,
        weather,
        setLocation,
        dataWeatherList,
        handleClickAddWeather,
        handleClickDeleteWeather,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);

export async function getCurrentWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_OPENWEATHERMap_KEY}`;
  const res = await fetch(url).then((res) => res.json());
  return res;
}
export async function getForecastWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_OPENWEATHERMap_KEY}`;
  const res = await fetch(url).then((res) => res.json());
  return res;
}
export async function getAirPollution(location) {
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_OPENWEATHERMap_KEY}`;
  const res = await fetch(url).then((res) => res.json());
  return res;
}
export async function getGeocoding(cityName, limit = 5) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${process.env.REACT_APP_OPENWEATHERMap_KEY}`;
  const res = await fetch(url).then((res) => res.json());
  return res;
}

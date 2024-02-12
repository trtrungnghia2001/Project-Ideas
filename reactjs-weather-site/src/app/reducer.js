
export const init =
  JSON.parse(localStorage.getItem("reactjs-weather-site-weatherSavedList")) ||
  [];
// [{ id: 1561096, lat: 21.0252, lon: 105.8548 }];

export function reducer(state, action) {
  switch (action.type) {
    case "add_weather":
      const newWeather = { id: action.id, lat: action.lat, lon: action.lon };
      return state.find((item) => item.id === action.id)
        ? state
        : [...state, newWeather];
    case "delete_weather":

      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}

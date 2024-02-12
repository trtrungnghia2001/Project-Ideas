export function changeFtoC(temp) {
  return Math.round(temp - 273.15);
}
export function getWeekDayName(date, weekday = "long") {
  return new Date(date).toLocaleDateString(`en-EN`, { weekday: weekday });
}
export function getMonthName(date) {
  return new Date(date).toLocaleDateString(`en-EN`, { month: "long" });
}
export function getTimeName(date) {
  const res = new Date(date);
  const hour = res.getHours() > 12 ? res.getHours() % 12 : res.getHours();
  const minute =
    res.getMinutes() < 10 ? "0" + res.getMinutes() : res.getMinutes();
  return (
    (hour < 10 && "0") +
    hour +
    ":" +
    minute +
    (res.getHours() > 12 ? "PM" : "AM")
  );
}
export function getTimeZone(time, timezone) {
  return new Date((time + timezone) * 1000);
}
export function getTimeZoneName(time, timezone) {
  const res = new Date((time + timezone) * 1000);
  const hour =
    res.getUTCHours() > 12 ? res.getUTCHours() % 12 : res.getUTCHours();
  const minute =
    res.getUTCMinutes() < 10 ? "0" + res.getUTCMinutes() : res.getUTCMinutes();
  return (
    (hour < 10 && "0") +
    hour +
    ":" +
    minute +
    (res.getUTCHours() > 12 ? "PM" : "AM")
  );
}
export async function getLocationCurrent() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return new Promise((res, rej) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (success) => {
          res({
            lat: success.coords.latitude,
            lon: success.coords.longitude,
          });
        },
        (error) => {
          console.log(error.message);
        },
        options
      );
    } else {
      rej(null);
    }
  });
}

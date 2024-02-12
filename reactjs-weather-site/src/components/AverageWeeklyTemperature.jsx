import React, { memo, useMemo } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { changeFtoC, getWeekDayName } from "app/utils";
ChartJS.register(...registerables);

const AverageWeeklyTemperature = ({ weather }) => {
  const weatherDay = useMemo(() => {
    const newData = weather?.forecastWeather?.list?.filter(
      (item, index) => index % 8 === 0
    );
    return newData;
  }, [weather]);
  return (
    <div>
      <h4>Average Weekly Temperature</h4>
      <div className="mt-4 w-full">
        <Line
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          className="min-w-full h-auto"
          data={{
            labels: weatherDay?.map((item) => getWeekDayName(item.dt_txt)),
            datasets: [
              {
                label: "",
                data: weatherDay?.map((item) => changeFtoC(item?.main?.temp)),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default memo(AverageWeeklyTemperature);

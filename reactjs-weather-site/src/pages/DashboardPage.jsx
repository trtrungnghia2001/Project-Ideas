import { useAppContext } from "app/context";

import SlideRight from "components/SlideRight";
import WindAndTemp from "components/WindAndTemp";
import AverageWeeklyTemperature from "components/AverageWeeklyTemperature";
import TodayOverview from "components/TodayOverview";

const DashboardPage = () => {
  const { weather } = useAppContext();

  return (
    <div>
      {/* Today overview */}
      <div>
        <div className="w-full md:hidden mb-8">
          <SlideRight />
        </div>
        <TodayOverview weather={weather} />
      </div>
      {/* Average Weekly Temperature */}
      <div className="mt-8">
        <AverageWeeklyTemperature weather={weather} />
      </div>
      {/* Wind & Temperature */}
      <div className="mt-8">
        <WindAndTemp weather={weather} />
      </div>
    </div>
  );
};

export default DashboardPage;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import MapPage from "./pages/MapPage";
import SavedLocationPage from "./pages/SavedLocationPage";
import CalendarPage from "./pages/CalendarPage";
import Loader from "components/Loader";
import { useAppContext } from "app/context";
import SlideTop from "components/SlideTop";
import SlideRight from "components/SlideRight";
import SildeLeft from "components/SildeLeft";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  const { isLoading, toggle } = useAppContext();

  return (
    <>
      <div className="flex">
        {/* moblie && tablet */}
        {toggle && (
          <div className="z-40 bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 overflow-auto h-screen w-full">
            <div className="min-w-[300px] max-w-[300px] h-full bg-[--grey] p-6">
              <SildeLeft />
            </div>
          </div>
        )}
        {/* PC */}
        <div className="hidden xl:block relative overflow-auto min-h-screen bg-[--grey]">
          <div className="min-w-[300px] max-w-[300px] h-full  p-6">
            <SildeLeft />
          </div>
        </div>

        <div className="flex-1 p-6 h-screen overflow-auto">
          <SlideTop />
          <hr className="my-6" />
          <Routes>
            <Route index element={<DashboardPage />} />
            <Route path="map" element={<MapPage />} />
            <Route path="saved-location" element={<SavedLocationPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        {/* PC */}
        <div className="max-w-[300px] w-full min-h-screen hidden md:block">
          <SlideRight />
        </div>
      </div>
      {isLoading && <Loader />}
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;

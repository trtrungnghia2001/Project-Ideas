import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import CountryDetailPage from "pages/CountryDetailPage";
import Header from "components/Header";
import { useAppContext } from "app/context";
import Loader from "components/Loader";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  const { isLoading } = useAppContext();
  return (
    <>
      <Header />
      <div className="container py-8">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<CountryDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      {isLoading && <Loader />}
    </>
  );
}

export default App;

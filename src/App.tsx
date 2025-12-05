import React, { Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Prices = React.lazy(() => import("./pages/Prices"));
const Booking = React.lazy(() => import("./pages/Booking"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(page === "home" ? "/" : `/${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigate} />
      <div className="">
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-20">
              <p className="text-gray-600">Betöltés...</p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home onNavigate={handleNavigate} />} />
            <Route path="/about" element={<About />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;

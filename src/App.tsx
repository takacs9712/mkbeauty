import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();
inject();

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
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/rolam" element={<About />} />
          <Route path="/arak" element={<Prices />} />
          <Route path="/munkaim" element={<Portfolio />} />
          <Route path="/idopontfoglalas" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
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
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
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

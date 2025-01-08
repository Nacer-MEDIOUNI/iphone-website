import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { logonacerImg } from "./utils";

const App = () => {
  const [loading, setLoading] = useState(true); // Start with loading as true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 1500ms, set loading to false
    }, 2500);

    // Cleanup timeout if the component is unmounted before it completes
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <>
      {loading ? (
        <div class="spinner-wrap">
          <div className="loading-container">
            <img className="logo-on-loading" src={logonacerImg} alt="" />
            <div class="spinner-item"></div>
            <div class="spinner-item spinner-item--2"></div>
          </div>
        </div>
      ) : (
        <main className="bg-black overflow-auto">
          <Navbar />
          <Hero />
          <Highlights />
          <Model />
          <Features />
          <HowItWorks />
          <Footer />
        </main> // Show main content when not loading
      )}
    </>
  );
};

export default Sentry.withProfiler(App);

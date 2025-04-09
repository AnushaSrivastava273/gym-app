import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Ensure this import exists
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css"; // Import your global styles here
import BMICalculator from "./components/BMICalculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import WorkoutSessions from "./components/WorkoutSessions";

const App = () => {
  return (
    <Router>  {/* Router wraps everything */}
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
      
    </Router>
  );
};

export default App;
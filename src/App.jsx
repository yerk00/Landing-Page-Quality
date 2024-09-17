import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Trabajos } from "./components/Trabajos";
import { Medicina } from "./components/Medicina";
import { AplicacionesWeb } from "./components/AplicacionesWeb";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Tecno } from "./components/Tecno";
import { Projects } from "./components/Projects";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {/* Rutas de la página principal */}
          <Route path="/" element={
            <>
              <Header data={landingPageData.Header} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Projects data={landingPageData.Projects}/>
              <Tecno data={landingPageData.Tecno}/>
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
              
              
            </>
          } />
          {/* SERVICIOS OJO X */}
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/medicina" element={<Medicina />} />
          <Route path="/aplicaciones-web" element={<AplicacionesWeb />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

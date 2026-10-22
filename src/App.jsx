import { useState, useRef, useEffect } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import ScrollTopButton from "./components/ScrollTopButton";
import { Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <div className="w-full h-full dark:text-white dark:bg-[#050505] relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Preloader />
                <Navbar />
                <Intro />
                <Skills />
                <Projects />
                <About />
                <GetInTouch />
                <Footer />
                <ScrollTopButton />
              </>
            }
          />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

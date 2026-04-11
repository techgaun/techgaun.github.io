import React from "react";
import About from "../subComponent/About";
import Hero from "../subComponent/Hero";
import Header from "../subComponent/Navbar";
import Ventures from "../subComponent/Ventures";
import Philosophy from "../subComponent/Philosophy";
import Footer from "../subComponent/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <div className="content">
        <About />
        <Ventures />
        <Philosophy />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

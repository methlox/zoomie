import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Matches from "../components/Order";
import Order from "../components/Hotel";
import Premium from "../components/Premium";
import Footer from "../components/Footer";
const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Matches />
      <Order />
      <Premium />
      <Footer />
    </>
  );
};

export default Home;

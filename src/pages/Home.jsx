import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Items from "./Items";

const Home = () => {
  return (
    <div>
      <Slider />
      <Items />
    </div>
  );
};

export default Home;

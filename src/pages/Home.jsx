import React from "react";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import { mobile } from "../responsive";
import Items from "./Items";

const Home = () => {
  return (
    <div>
      <Slider />
      {mobile ? <Items /> : null}
      <Newsletter />
    </div>
  );
};

export default Home;

import React from "react";
import Slider from "../components/Slider";
import { mobile } from "../responsive";
import Items from "./Items";

const Home = () => {
  return (
    <div>
      <Slider />
      {mobile ? <Items /> : null}
    </div>
  );
};

export default Home;

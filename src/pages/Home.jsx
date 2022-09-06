import React, { useEffect, useState } from "react";
import MobileSlider from "../components/MobileSlider";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import { mobile } from "../responsive";
import Items from "./Items";

const Home = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {width < 480 ? <MobileSlider /> : null}
      <Slider />
      {mobile ? <Items /> : null}
      <Newsletter />
    </div>
  );
};

export default Home;

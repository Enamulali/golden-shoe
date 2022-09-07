import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SingleItem from "./components/SingleItem";
import Livechat from "./pages/Livechat";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Returns from "./pages/Returns";
import { useNavigate } from "react-router-dom";
import { GrLinkTop } from "react-icons/gr";
import { useRef } from "react";

function App() {
  const navigate = useNavigate();

  const nav = useRef(null);
  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour: "smooth",
    });
  };

  return (
    <>
      <div ref={nav} />
      {window.innerWidth < 480 ? null : <Banner />}
      <Navbar />
      {window.location.pathname.includes(`/items/`) ? (
        <button className="category-btns" onClick={() => navigate(-1)}>
          Go back
        </button>
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:item_id" element={<SingleItem />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/chat" element={<Livechat />} />
      </Routes>

      <Footer />
      <button className="scroll-btn" onClick={() => handleScroll(nav)}>
        <GrLinkTop className="scroll" />
      </button>
    </>
  );
}

export default App;

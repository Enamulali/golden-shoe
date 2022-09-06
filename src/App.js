import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SingleItem from "./components/SingleItem";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Items from "./pages/Items";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:item_id" element={<SingleItem />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;

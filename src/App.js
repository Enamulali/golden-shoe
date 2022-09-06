import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SingleItem from "./components/SingleItem";
import Chat from "./pages/Chat";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Returns from "./pages/Returns";

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
        <Route path="/returns" element={<Returns />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

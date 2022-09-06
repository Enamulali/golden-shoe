import React from "react";
import { BsBasket3Fill, BsFillChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1 className="Title">Golden Shoe</h1>
      </Link>
      <h1 className="Title">
        <Link to={"/checkout"} style={{ textDecoration: "none" }}>
          <BsBasket3Fill />
        </Link>
      </h1>
      <h1 className="Title">
        <Link to={"/chat"} style={{ textDecoration: "none" }}>
          <BsFillChatDotsFill />
        </Link>{" "}
      </h1>
    </div>
  );
};

export default Navbar;

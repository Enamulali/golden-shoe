import React from "react";
import { BsBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1 className="Title">Golden Shoe</h1>
      </Link>
      <Link to={"/checkout"} style={{ textDecoration: "none" }}>
        <h1 className="Title">
          <BsBasket3Fill />
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;

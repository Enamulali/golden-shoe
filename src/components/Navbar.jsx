import React from "react";
import { BsBasket3Fill, BsFillChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Title = styled.h1`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 2em;
  margin-bottom: 0em;
  margin-top: 0em;
  font-size: 24px;
  color: #4b6587;
`;

const Navbar = () => {
  return (
    <Container>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Title>Golden Shoe</Title>
      </Link>
      <Container>
        <Title>
          <Link to={"/checkout"} style={{ textDecoration: "none" }}>
            <BsBasket3Fill />
          </Link>
        </Title>

        <Title>
          <Link to={"/chat"} style={{ textDecoration: "none" }}>
            <BsFillChatDotsFill />
          </Link>
        </Title>
      </Container>
    </Container>
  );
};

export default Navbar;

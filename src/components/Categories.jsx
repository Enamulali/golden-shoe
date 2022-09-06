import React, { useState, useEffect } from "react";
import { getCategories } from "../utils/API";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 1em;
  margin-bottom: 2em;
  background-color: #f5fafd;
  color: #fff;
  font-size: 18px;
  color: black;
`;

const List = styled.li`
  display: inline-block;
  vertical-align: top;
`;

const Buttons = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 3px;
  color: #000;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 5px 5px;
  text-align: center;
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

const Categories = ({ setCurrentCategory }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <>
      <Container>
        <ul className="category-ul">
          <span id="filter">Filter item by: </span>
          {categories.map((category) => {
            return (
              <List key={category.category_name}>
                <Buttons
                  onClick={() => {
                    setCurrentCategory(category.category_name);
                  }}
                >
                  {category.category_name}
                </Buttons>
              </List>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default Categories;

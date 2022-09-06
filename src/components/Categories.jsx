import React, { useState, useEffect } from "react";
import "./Categories.css";
import { getCategories } from "../utils/API";

const Categories = ({ setCurrentCategory }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <>
      <div className="Nav-category">
        <ul className="category-ul">
          <span id="filter">Filter item by: </span>
          {categories.map((category) => {
            return (
              <li className="category-li" key={category.category_name}>
                <button
                  className="category-btns"
                  onClick={() => {
                    setCurrentCategory(category.category_name);
                  }}
                >
                  {category.category_name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Categories;

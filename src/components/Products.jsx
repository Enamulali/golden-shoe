import React, { useEffect, useState } from "react";
import { getItems } from "../utils/API";
import "../components/Products.css";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import { FaPoundSign } from "react-icons/fa";

const Items = () => {
  const [items, setItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems(currentCategory).then((itemsFromApi) => {
      setItems(itemsFromApi);
      setIsLoading(false);
    });
  }, [currentCategory]);

  return (
    <>
      <Categories setCurrentCategory={setCurrentCategory} />
      {isLoading ? "Loading..." : null}
      <div className="items-container">
        <ul className="item-ul">
          {items.map((item) => {
            return (
              <Link to={`/items/${item.item_id}`} key={item.item_id}>
                <li className="item-card" key={item.item_id}>
                  <h3>{item.item_name}</h3>
                  <img
                    src={item.img_url}
                    alt={item.item_name}
                    className="item-img"
                  />
                  <p>
                    <span>
                      <FaPoundSign />:
                    </span>
                    <span>£{item.price}</span>
                  </p>
                  <p>In Stock: Yes</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Items;

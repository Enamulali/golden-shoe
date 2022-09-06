import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getItemById } from "../utils/API";
import { useNavigate } from "react-router-dom";

const SingleItem = () => {
  const { item_id } = useParams();
  const navigate = useNavigate();
  const [singleItem, setSingleItem] = useState([]);

  useEffect(() => {
    getItemById(item_id).then((singleItemFromApi) => {
      setSingleItem(singleItemFromApi);
    });
  }, [item_id]);

  return (
    <>
      <div className="single-item">
        <button onClick={() => navigate(-1)}>Go back</button>
        <h3>{singleItem.item_name}</h3>
        <img
          src={singleItem.img_url}
          alt={singleItem.item_name}
          className="item-img"
        />
        <h3>
          <span>£</span>
          <span>{singleItem.price}</span>
        </h3>
        <p>Description: {singleItem.description}</p>
        <button>Add to Basket</button>
      </div>
    </>
  );
};

export default SingleItem;

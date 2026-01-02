import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Item = ({ id, image, name, new_price, old_price }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item">
      <div className="item-image-wrapper">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} />
        </Link>

        {/* HOVER ACTIONS */}
        <div className="item-actions">
          <Link to={`/product/${id}`} className="quick-view">
            Quick View
          </Link>
          <button
            className="add-cart"
            onClick={() => addToCart(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <p className="item-name">{name}</p>

      <div className="item-prices">
        <span className="item-price-new">${new_price}</span>
        <span className="item-price-old">${old_price}</span>
      </div>
    </div>
  );
};

export default Item;

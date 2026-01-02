import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);
  const navigate = useNavigate();

  
  const images = [
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="pd-wrapper">
      {/* BACK */}
      <button className="pd-back-btn" onClick={() => navigate(-1)}>
        ←
      </button>

      <div className="pd-content">
        {/* IMAGES */}
        <div className="pd-gallery">
          <div className="pd-thumbs">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className={activeImage === img ? "active" : ""}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>

          <div className="pd-main-img">
            <img src={activeImage} alt={product.name} />
          </div>
        </div>

        {/* INFO */}
        <div className="pd-info">
          <h1>{product.name}</h1>

          <div className="pd-price">
            <span className="new">${product.new_price}</span>
            <span className="old">${product.old_price}</span>
          </div>

          <p className="pd-desc">
            Premium performance with refined comfort and modern design —
            built for elegance and everyday confidence.
          </p>

          {/* QUANTITY */}
          <div className="pd-qty">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              −
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          {/* CART */}
          <button
            className="pd-cart"
            onClick={() => {
              for (let i = 0; i < quantity; i++) addToCart(product.id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

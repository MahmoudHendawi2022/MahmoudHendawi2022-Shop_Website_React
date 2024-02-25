import React from "react";
import "./ProductDisplay.css";
import rate_icon from "../Assets/star_icon.png";
import rate_icon_dull from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { shopContext } from "../../Context/Context";

const ProductDisplay = (props) => {
  // const { all_product } = useContext(shopContext);
  const { addToCart } = useContext(shopContext);
  // const { removeFromCard } = useContext(shopContext);
  const { product } = props;

  return (
    <div className="productDisplay">
      <div className="containers">
        <div className="proDisplayLeft">
          <div className="smallImage">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="mainImage">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="proDisplayRight">
          <h1>{product.name}</h1>
          <div className="rate">
            <img src={rate_icon} alt="" />
            <img src={rate_icon} alt="" />
            <img src={rate_icon} alt="" />
            <img src={rate_icon} alt="" />
            <img src={rate_icon_dull} alt="" />
            <p>(22)</p>
          </div>
          <div className="proPrice">
            <p className="old-price">{product.old_price}</p>
            <p className="new-price">{product.new_price}</p>
          </div>
          <p className="detailes">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ab
            explicabo labore. Facilis esse velit, exercitationem iusto mollitia
          </p>
          <p className="select-size">Select Size</p>
          <div className="sizes">
            <p className="small">S</p>
            <p className="mediam">M</p>
            <p className="large">L</p>
            <p className="xlarge">XL</p>
            <p className="xxlarge">XXL</p>
          </div>
          <button
            className="addToCart"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <div className="category-type">
            <p>
              Category: <span>{product.category}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

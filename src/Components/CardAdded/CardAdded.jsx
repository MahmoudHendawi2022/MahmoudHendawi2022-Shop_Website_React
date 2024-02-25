import React, { useContext } from "react";
import "./CardAdded.css";
import remove_image from "../Assets/cart_cross_icon.png";
import { shopContext } from "../../Context/Context";

export const CardAdded = () => {
  const { all_product, removeFromCart, cartItems, getTotalAmount } =
    useContext(shopContext);

  return (
    <div className="card-added">
      <div className="containers">
        <div className="card-added-title">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_product.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <>
                <div className="card-added-detailes">
                  <img src={item.image} alt="" />
                  <p className="cTitle">{item.name}</p>
                  <p className="cPrice">${item.new_price}</p>
                  <p className="cQuantity">{cartItems[item.id]}</p>
                  <p className="cTotal-price">
                    ${item.new_price * cartItems[item.id]}
                  </p>
                  <img
                    src={remove_image}
                    alt=""
                    className="cRemove"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
                <hr />
              </>
            );
          } else {
            return null;
          }
        })}

        <div className="cartTotalsDetailes">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="totals">
              <p>Total</p>
              <p>${getTotalAmount()}</p>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="promo-code">
            <p>if you have apromo code, Enter it here</p>
            <div className="promo-code-detailes">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

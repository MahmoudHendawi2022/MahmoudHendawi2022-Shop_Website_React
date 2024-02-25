import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../Components/Assets/all_product";
export const shopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let filterItem = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += filterItem.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalProductLength = () => {
    let productLength = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        productLength += cartItems[item];
      }
    }
    return productLength;
  };

  const contextValue = {
    getTotalAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalProductLength,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;

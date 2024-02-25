import React from "react";
import "./ShopCategory.css";
import Item from "../../Components/Item/Item";
import { useContext } from "react";
import { shopContext } from "../../Context/Context";

const ShopCategory = (props) => {
  const {all_product} = useContext(shopContext)
  return (
    <div className="shopCategory">
      <div className="containers">
        <div className="banner">
          <img src={props.banner} alt="" />
        </div>
        <div className="items">
          {all_product.map((item) => {
            if (item.category === props.category) {
              return (
                <Item
                  name={item.name}
                  image={item.image}
                  old_price={item.old_price}
                  new_price={item.new_price}
                  id={item.id}
                />
              );
              
            }else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;

import React from "react";
import "./Popular.css";
import popularData from "../Assets/data";
import Item from "../Item/Item";
import PopularTitle from "../PopularTitle/PopularTitle";

const Popular = () => {
  return (
    <div className="popular-in-woman">
      <div className="containers">
        <PopularTitle>POPULAR IN WOMEN</PopularTitle>
        <div className="items">
          {popularData.map((item) => {
            return (
              <Item
                key={item.id}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                image={item.image}
                id = {item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;

import React from "react";
import "./NewCollection.css";
import PopularTitle from "../PopularTitle/PopularTitle";
import NewCollectionData from "../Assets/new_collections";
import Item from "../Item/Item";
const NewCollection = () => {
  return (
    <div className="new-collection">
      <div className="containers">
        <PopularTitle>NEW COLLECTIONS</PopularTitle>
        <div className="items">
          {NewCollectionData.map((item) => {
            return (
              <Item
                key={item.id}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                image={item.image}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;

import React from "react";
import "./RelatedProducts.css";
// import RelatedData from "../Assets/data";
import Item from "../Item/Item";
import PopularTitle from "../PopularTitle/PopularTitle";
import { useContext } from "react";
import { shopContext } from "../../Context/Context";

const RelatedProducts = (props) => {
  const { all_product } = useContext(shopContext);
  const { product } = props;
  const  newProducts  = all_product.filter(
    (card) => card.category === product.category
  );
  return (
    <div className="relatedProducts">
      <div className="containers">
        <PopularTitle>Related Products</PopularTitle>
        <div className="items">
          {newProducts.map((item) => {
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

export default RelatedProducts;

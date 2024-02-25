import React from "react";
import "./Shop.css";
import { Hero } from "../../Components/index";
import Popular from "../../Components/Popular/Popular";
import Offers from "../../Components/Offers/Offers";
import NewCollection from "../../Components/NewCollection/NewCollection";
import Newsletter from "../../Components/Newsletter/Newsletter";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <Newsletter />
    </div>
  );
};

export default Shop;

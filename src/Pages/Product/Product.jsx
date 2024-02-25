import React from "react";
import "./Product.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../../Context/Context";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";
const Product = () => {
  const { all_product } = useContext(shopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));
  // console.log(product);
  return <div className="product">
    <ProductDisplay product = {product}/>
    <DescriptionBox />
    <RelatedProducts  product = {product}/>
  </div>;
};

export default Product;

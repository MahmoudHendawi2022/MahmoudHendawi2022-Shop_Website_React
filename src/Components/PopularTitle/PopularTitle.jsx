import React from "react";
import "./PopularTitle.css";

const PopularTitle = (props) => {
  return (
    <h2 className="titleComponent">
      {props.children} <hr />
    </h2>
  );
};

export default PopularTitle;

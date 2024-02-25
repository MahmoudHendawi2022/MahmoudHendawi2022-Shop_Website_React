
import "./DescriptionBox.css";
import { useState } from "react";

const DescriptionBox = () => {
    // const [description , setDescription] = useState("fade")
  return (
    <div className="descriptionBox">
      <div className="containers">
        <div className="description-box-nav">
          <div className="description-title">
            Description
          </div>
          <div className="description-title">
            Reviews(122)
          </div>
        </div>
        <div className="description-detailes">
          <p id="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            veritatis culpa, consequatur, adipisci id eos, aut reprehenderit
            tempora et quaerat magnam ipsam quam? Quam nesciunt unde minus
            itaque cum a.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aspernatur veritatis culpa, consequatur, adipisci id eos, aut
            reprehenderit tempora et quaerat magnam ipsam quam? Quam nesciunt
            unde minus itaque cum a.
          </p>
          <p id="review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            veritatis culpa, consequatur, adipisci id eos, aut reprehenderit
            tempora et quaerat magnam ipsam quam? Quam nesciunt unde minus
            itaque cum a.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;

import React from "react";
import "./style.css";

function Card({ flip, content, flipped }) {
  let cardContent;
  if (flipped) {
    cardContent = content;
  } else {
    cardContent = "";
  }
  return (
    <div onClick={flip} className={`Card ${flipped ? "face-up" : ""}`}>
      <div className="im" >
      <img src={cardContent} alt=""/>
      </div>
      {/* {cardContent} */}
    </div>
  );
}

export default Card;

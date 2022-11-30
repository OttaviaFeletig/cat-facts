import React from "react";
import { CardButton } from "../style/button.style";

const Card = ({ className, data, index, imgDim }) => {
  const { fact, length } = data;
  return (
    <div className={className}>
      <img
        width="100%"
        src={`https://placekitten.com/${imgDim}/${imgDim}?image=${index + 1}`}
        alt={fact}
      />
      <p>{fact}</p>
    </div>
  );
};

export default Card;

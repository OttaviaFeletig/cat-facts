import React, { useEffect, useState } from "react";
import ProgressiveImg from "./ProgressiveImage";

const Card = ({ className, data, index, placeholderDim, imgDim }) => {
  const { fact } = data;
  const [image, setImage] = useState(
    `https://placekitten.com/${placeholderDim}/${placeholderDim}?image=${
      index + 1
    }`
  );

  useEffect(() => {
    setImage(`https://placekitten.com/${imgDim}/${imgDim}?image=${index + 1}`);
  }, [imgDim, index]);

  return (
    <div className={className}>
      <ProgressiveImg placeholderSrc={image} width={imgDim} height={imgDim} />
      {/* <img
        width="100%"
        src={`https://placekitten.com/${imgDim}/${imgDim}?image=${index + 1}`}
        alt={fact}
      /> */}
      <p>{fact}</p>
    </div>
  );
};

export default Card;

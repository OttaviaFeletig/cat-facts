import React, { useEffect, useState } from "react";
import ProgressiveImg from "./ProgressiveImage";

const Card = ({ className, data, placeholderDim, imgDim, picN }) => {
  const { fact } = data;
  const [image, setImage] = useState(
    `https://placekitten.com/${placeholderDim}/${placeholderDim}?image=${picN}`
  );

  useEffect(() => {
    setImage(`https://placekitten.com/${imgDim}/${imgDim}?image=${picN}`);
  }, [imgDim, picN]);

  return (
    <div className={className}>
      <ProgressiveImg
        src={image}
        width={imgDim}
        height={imgDim}
        fact={fact}
        style={{
          maxWidth: "100%",
          display: "block",
          maxHeight: "100%",
          borderRadius: "5px",
        }}
      />
      <p>{fact}</p>
    </div>
  );
};

export default Card;

import React from "react";
import { useLocation } from "react-router-dom";
import { CardContainer, CardFull, CardStyled } from "../style/card.style";

const Detail = () => {
  const { state } = useLocation();
  return (
    <CardContainer>
      <CardFull data={state.cat} index={state.index} imgDim={500} />
    </CardContainer>
  );
};

export default Detail;

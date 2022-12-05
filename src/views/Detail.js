import React from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { CardContainer, CardFull } from "../style/card.style";
import { device } from "../style/device";

const Detail = () => {
  const { state } = useLocation();
  const isDesktop = useMediaQuery(device.mobileXL);
  return (
    <CardContainer>
      <CardFull
        data={state.cat}
        picN={state.picN}
        imgDim={isDesktop ? 500 : 300}
        placeholderDim={isDesktop ? 200 : 100}
      />
    </CardContainer>
  );
};

export default Detail;

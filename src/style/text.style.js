import styled from "styled-components";
import { device } from "./device";

export const H2 = styled.h2`
  font-size: 1em;
  margin-left: 60px;

  @media ${device.mobileL} {
    margin: 0px;
  }
  @media ${device.mobileXL} {
    font-size: 1.5em;
  }
`;

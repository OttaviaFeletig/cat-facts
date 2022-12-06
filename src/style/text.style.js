import styled from "styled-components";
import { device } from "./device";

const H2 = styled.h2`
  font-size: 1em;

  @media ${device.mobileL} {
    margin: 0px;
  }
  @media ${device.mobileXL} {
    font-size: 1.5em;
  }
`;
export { H2 };

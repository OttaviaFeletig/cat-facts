import styled from "styled-components";
import AnimatedDiv from "../components/AnimatedDiv";
import Header from "../components/Header";
const HeaderMenuContainer = styled(AnimatedDiv)`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  align-items: center;
  position: fixed;
`;
const HeaderStyled = styled(Header)`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;
export { HeaderMenuContainer, HeaderStyled };

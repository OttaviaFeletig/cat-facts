import styled from "styled-components";
import AnimatedDiv from "../components/AnimatedDiv";
import Container from "../components/Container";
import Header from "../components/Header";
export const HeaderMenuContainer = styled(AnimatedDiv)`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  align-items: center;
  position: fixed;
  backgroun: transparent;
  // background: ${({ theme }) => theme.colors.footer};
`;
export const HeaderStyled = styled(Header)`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;

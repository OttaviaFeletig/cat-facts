import styled from "styled-components";
import Container from "../components/Container";
import Header from "../components/Header";
export const HeaderMenuContainer = styled(Container)`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 10px;
  align-items: center;
  position: fixed;
  // margin-left: 20px;
  // z-index: 5;
  // justify-content: space-around;
`;
export const HeaderStyled = styled(Header)`
  padding: 20px;
  text-align: center;
  font-weight: bold;
  // padding: 10px;
  // z-index: 5;

  // & p {
  //   color: ${({ theme }) => theme.colors.text};
  // }
`;

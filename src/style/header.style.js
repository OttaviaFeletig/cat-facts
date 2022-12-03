import styled from "styled-components";
import Header from "../components/Header";
export const HeaderStyled = styled(Header)`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px;
  text-align: center;
  font-weight: bold;
  & p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

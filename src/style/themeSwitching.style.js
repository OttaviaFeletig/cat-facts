import styled from "styled-components";
import Container from "../components/Container";
import { device } from "./device";
export const ThemeContainer = styled(Container)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ThemeButton = styled.button`
  margin: 0 5px;
  padding: 10px;
  font-size: 0.5rem;
  border-radius: 5px;
  border: none;
  width: 15px;
  height: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
`;

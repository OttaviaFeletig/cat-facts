import styled from "styled-components";
import Container from "../components/Container";

export const ThemeContainer = styled(Container)`
  // background-color: ${({ theme }) => theme.colors.header};
  width: 100%;
  margin-left: 70px;
  display: flex;
  flex-wrap: wrap;
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
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
`;

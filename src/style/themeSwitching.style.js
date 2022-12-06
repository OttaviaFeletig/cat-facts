import styled from "styled-components";
import AnimatedDiv from "../components/AnimatedDiv";
import Container from "../components/Container";
import { device } from "./device";
const ThemeButtonContainer = styled(Container)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ThemeButton = styled.button`
  margin: 0 5px;
  padding: 10px;
  font-size: 0.5rem;
  border-radius: 5px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
`;

const ThemeContainer = styled(AnimatedDiv)`
  width: 60%;
  @media ${device.mobileL} {
    width: 100%;
  }
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  flex-direction: row-reverse;
  height: 60;
  margin-right: 80px;
`;
export { ThemeButtonContainer, ThemeButton, ThemeContainer };

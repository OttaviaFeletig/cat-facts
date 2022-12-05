import styled from "styled-components";
import AnimatedRect from "../components/AnimatedRect";
import Button from "../components/Button";

const MenuButton = styled(AnimatedRect)`
  z-index: 100;
  cursor: pointer;
  margin: 20px 30px 20px 20px;
`;

const ChangePageButton = styled(Button)`
  border: none;
  height: 100%;
  background-color: transparent;
  outline: none;
  cursor: ${({ cursor }) => (cursor ? cursor : "pointer")};
`;
export { MenuButton, ChangePageButton };

import styled from "styled-components";
import Button from "../components/Button";

const MenuButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background};
  width: 60px;    
  height: 60px;    
  z-index: 100;
  }
`;

export { MenuButton };

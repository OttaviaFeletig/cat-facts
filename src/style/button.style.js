import styled from "styled-components";
import AnimatedDiv from "../components/AnimatedDiv";
import Button from "../components/Button";

const MenuButton = styled(AnimatedDiv)`
  width: 60px;    
  height: 60px;    
  z-index: 100;
  background: linear-gradient(to left,${({ theme }) =>
    theme.colors.background}, ${({ theme }) => theme.colors.cardBgc});
  border-radius: 50%;
  }
`;

export { MenuButton };

import styled from "styled-components";
import Button from "../components/Button";

const CardButton = styled(Button)`
  color: ${({ theme }) => theme.colors.background};
`;

export { CardButton };

import styled from "styled-components";
import Loader from "../components/Loader";

export const LoaderStyled = styled(Loader)`
  border: 10px solid ${({ theme }) => theme.colors.text};
  border-radius: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
`;

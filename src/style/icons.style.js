import styled from "styled-components";
import {
  ArrowNext,
  ArrowPrevious,
} from "@styled-icons/fluentui-system-regular";
import { ArrowGoBack } from "@styled-icons/remix-line";

export const Previous = styled(ArrowPrevious)`
  height: 100%;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`;
export const Next = styled(ArrowNext)`
  height: 100%;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`;

export const GoBack = styled(ArrowGoBack)`
  width: 40px;
  color: ${({ theme }) => theme.colors.text};
`;

import styled from "styled-components";
import {
  ArrowNext,
  ArrowPrevious,
} from "@styled-icons/fluentui-system-regular";

export const Previous = styled(ArrowPrevious)`
  height: 100%;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`;
export const Next = styled(ArrowNext)`
  height: 100%;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`;

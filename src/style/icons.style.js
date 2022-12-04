import styled from "styled-components";
import {
  ArrowNext,
  ArrowPrevious,
} from "@styled-icons/fluentui-system-regular";

export const Previous = styled(ArrowPrevious)`
  //   cursor: pointer;
  height: 100%;
  color: ${({ theme }) => theme.colors.cardBgc};
`;
export const Next = styled(ArrowNext)`
  //   cursor: pointer;

  height: 100%;

  color: ${({ theme }) => theme.colors.cardBgc};
`;

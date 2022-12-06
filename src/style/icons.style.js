import styled from "styled-components";
import {
  ArrowNext,
  ArrowPrevious,
} from "@styled-icons/fluentui-system-regular";
import { ArrowGoBack } from "@styled-icons/remix-line";

const Previous = styled(ArrowPrevious)`
  height: 100%;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`;
const Next = styled(ArrowNext)`
  height: 100%;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`;

const GoBack = styled(ArrowGoBack)`
  width: 40px;
  color: ${({ theme }) => theme.colors.text};
`;
export { Previous, Next, GoBack };

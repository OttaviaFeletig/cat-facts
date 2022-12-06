import { createGlobalStyle } from "styled-components";

import * as theme from "./theme.style";
const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: Oswald;
  & #root {
    display:flex;
    flex-direction:column;
    justify-content: space-between;
  }
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
  overflow-x: hidden;
  white-space: nowrap;

}

.light {
  background-color: ${theme.light.colors.header};
}
.dark {
  background-color: ${theme.dark.colors.header};
}
.blue {
  background-color: ${theme.blue.colors.header};
}


.active{
    border: 3px ${({ theme }) => theme.colors.border};
}

.no-border {
  border: none;
}

`;

export { GlobalStyles };

import { createGlobalStyle } from "styled-components";

import * as theme from "./theme.style";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Oswald');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  // box-sizing: border-box;
}
body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: Oswald;
  & #root {
    // min-height: 100vh;
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

// theme buttons color
.light {
  background-color: ${theme.light.colors.header};
}
.dark {
  background-color: ${theme.dark.colors.header};
}
.blue {
  background-color: ${theme.blue.colors.header};
}


// active theme
.active{
    border: 3px ${({ theme }) => theme.colors.border};
}


`;

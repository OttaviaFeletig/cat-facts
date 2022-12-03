import React from "react";
import { ThemeButton, ThemeContainer } from "../style/themeSwitching.style";
import { light, dark, blue } from "../style/theme.style";
const Header = ({ selectedTheme, setSelectedTheme }) => {
  return (
    <ThemeContainer>
      <span>Themes: </span>
      <ThemeButton
        className={`light ${selectedTheme === light ? "active" : ""}`}
        onClick={() => setSelectedTheme(light)}
      ></ThemeButton>
      <ThemeButton
        className={`dark ${selectedTheme === dark ? "active" : ""}`}
        onClick={() => setSelectedTheme(dark)}
      ></ThemeButton>
      <ThemeButton
        className={`blue ${selectedTheme === blue ? "active" : ""}`}
        onClick={() => setSelectedTheme(blue)}
      ></ThemeButton>
    </ThemeContainer>
  );
};

export default Header;

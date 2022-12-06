import React, { useState } from "react";
import {
  ThemeButton,
  ThemeButtonContainer,
  ThemeContainer,
  ThemeFlexCont,
} from "../style/themeSwitching.style";
import { light, dark, blue } from "../style/theme.style";
import { MenuButton } from "../style/button.style";
import { HeaderMenuContainer } from "../style/header.style";
import { useSpring } from "react-spring";
import AnimatedDiv from "./AnimatedDiv";
import {
  backgroundInOut,
  fadeInStyles,
  fadeOutStyles,
  first,
  second,
  third,
} from "../style/animations";
import { H2 } from "../style/text.style";
import { Link, useLocation } from "react-router-dom";
import { GoBack } from "../style/icons.style";
import { device } from "../style/device";
import { useTheme } from "styled-components";

const Header = ({ selectedTheme, setSelectedTheme, scrollY }) => {
  const theme = useTheme();
  const [isOpen, toggle] = useState(false);
  const location = useLocation();
  const buttonFadeIn = useSpring(fadeInStyles(isOpen));
  const buttonFadeOut = useSpring(fadeOutStyles(isOpen));

  const handleToggle = () => {
    toggle(!isOpen);
  };
  const menuAnimation = [
    useSpring(first(isOpen)),
    useSpring(second(isOpen)),
    useSpring(third(isOpen)),
  ];
  const backgroundAnimationInOut = useSpring(
    backgroundInOut(scrollY, theme.colors.footer)
  );
  const scrollUp = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <HeaderMenuContainer animation={{ ...backgroundAnimationInOut }}>
      <MenuButton
        handleClick={handleToggle}
        n={3}
        width={"40"}
        height={"4"}
        rx={"2"}
        animations={menuAnimation}
      />
      {isOpen ? (
        <>
          <ThemeContainer animation={{ ...buttonFadeIn }}>
            <ThemeButtonContainer>
              <ThemeButton
                className={`light ${
                  selectedTheme === light ? "active" : "no-border"
                }`}
                onClick={() => setSelectedTheme(light)}
              ></ThemeButton>
              <ThemeButton
                className={`dark ${
                  selectedTheme === dark ? "active" : "no-border"
                }`}
                onClick={() => setSelectedTheme(dark)}
              ></ThemeButton>
              <ThemeButton
                className={`blue ${
                  selectedTheme === blue ? "active" : "no-border"
                }`}
                onClick={() => setSelectedTheme(blue)}
              ></ThemeButton>
            </ThemeButtonContainer>
            <H2>Different themes for different tastes.</H2>
          </ThemeContainer>
        </>
      ) : (
        <AnimatedDiv
          elementStyle={{
            opacity: 1,
            display: "flex",
            alignItems: "center",
            marginLeft: 25,
            cursor: "pointer",
          }}
          animation={{ ...buttonFadeOut }}
        >
          <h1 onClick={scrollUp}>Cat facts</h1>
        </AnimatedDiv>
      )}
      <div style={{ position: "absolute", left: "10px" }}>
        {location.pathname === "/catfacts" && (
          <Link to={"/"}>
            <GoBack />
          </Link>
        )}
      </div>
    </HeaderMenuContainer>
  );
};

export default Header;

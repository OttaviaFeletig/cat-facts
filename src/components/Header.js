import React, { useState } from "react";
import { ThemeButton, ThemeContainer } from "../style/themeSwitching.style";
import { light, dark, blue } from "../style/theme.style";
import { MenuButton } from "../style/button.style";
import { HeaderMenuContainer } from "../style/header.style";
import { useSpring } from "react-spring";
import AnimatedDiv from "./AnimatedDiv";
import {
  fadeInStyles,
  fadeOutStyles,
  first,
  second,
  third,
} from "../style/animations";
import { H2 } from "../style/text.style";
import { Link, useLocation } from "react-router-dom";
import { GoBack } from "../style/icons.style";

const Header = ({ selectedTheme, setSelectedTheme }) => {
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

  return (
    <HeaderMenuContainer>
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
          <AnimatedDiv
            elementStyle={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              flexDirection: "row-reverse",
              height: 60,
              marginRight: "80px",
            }}
            animation={{ ...buttonFadeIn, buttonFadeOut }}
          >
            <ThemeContainer>
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
            <H2>Different themes for different tastes.</H2>
          </AnimatedDiv>
        </>
      ) : (
        <AnimatedDiv
          elementStyle={{
            opacity: 1,
            display: "flex",
            alignItems: "center",
            marginLeft: 25,
          }}
          animation={{ ...buttonFadeIn, ...buttonFadeOut }}
        >
          <Link
            to={
              location.pathname === "/catfacts"
                ? "/"
                : window.scroll({ top: 0, behavior: "smooth" })
            }
          >
            <h1>Cat facts</h1>
          </Link>
        </AnimatedDiv>
      )}
      {location.pathname === "/catfacts" && (
        <Link to={"/"}>
          <GoBack />
        </Link>
      )}
    </HeaderMenuContainer>
  );
};

export default Header;

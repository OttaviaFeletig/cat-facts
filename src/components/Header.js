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
  rotateStyles,
  second,
  third,
} from "../style/animations";
import { H2 } from "../style/text.style";

const Header = ({ selectedTheme, setSelectedTheme, handleClick }) => {
  const [isOpen, toggle] = useState(false);

  const buttonFadeIn = useSpring(fadeInStyles);
  const buttonFadeOut = useSpring(fadeOutStyles);
  // const rotate = useSpring(rotateStyles(isOpen));
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
              opacity: 1,
              display: "flex",
              alignItems: "center",
              marginLeft: 25,
            }}
            animation={buttonFadeOut}
          >
            <h1>Cat facts.</h1>
          </AnimatedDiv>
          <AnimatedDiv
            elementStyle={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              flexWrap: "wrap",
              height: 60,
            }}
            animation={buttonFadeIn}
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
        <div style={{ display: "flex", alignItems: "center", marginLeft: 25 }}>
          <h1>Cat facts.</h1>
        </div>
      )}
    </HeaderMenuContainer>
  );
};

export default Header;

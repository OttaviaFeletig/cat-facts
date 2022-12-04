import React, { useState } from "react";
import { ThemeButton, ThemeContainer } from "../style/themeSwitching.style";
import { light, dark, blue } from "../style/theme.style";
import { MenuButton } from "../style/button.style";
import { HeaderMenuContainer } from "../style/header.style";
import { useSpring } from "react-spring";
import AnimatedDiv from "./AnimatedDiv";
import { fadeInStyles, fadeOutStyles, rotateStyles } from "../style/animations";
import { H2 } from "../style/text.style";

const Header = ({ selectedTheme, setSelectedTheme, handleClick }) => {
  const [isOpen, toggle] = useState(false);

  const buttonFadeIn = useSpring(fadeInStyles);
  const buttonFadeOut = useSpring(fadeOutStyles);
  const rotate = useSpring(rotateStyles(isOpen));
  const handleToggle = () => {
    toggle(!isOpen);
  };
  // handleClick={handleClick}
  //     isOpen={isOpen}
  //     className={className}
  //     style={{
  //       width: "100%",
  //       height: "100%",
  //     }}
  //     animation={rotate}
  return (
    <HeaderMenuContainer>
      <MenuButton
        isOpen={isOpen}
        handleClick={handleToggle}
        animation={rotate}
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

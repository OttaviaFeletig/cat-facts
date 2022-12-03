import React, { useEffect, useState } from "react";
import { ThemeButton, ThemeContainer } from "../style/themeSwitching.style";
import { light, dark, blue } from "../style/theme.style";
import { MenuButton } from "../style/button.style";
import Container from "./Container";
import { HeaderMenuContainer } from "../style/header.style";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "styled-components";

const Header = ({ selectedTheme, setSelectedTheme }) => {
  const [isOpen, toggle] = useState(false);
  const theme = useTheme();

  const styles = useSpring({
    from: { width: isOpen ? "100%" : 0 },
    to: { width: isOpen ? "100%" : 0 },
  });
  const fadeInStyles = useSpring({
    config: { mass: 1, tension: 70, friction: 15 },
    from: { opacity: 0 },
    to: {
      opacity: 1,
      // width: isOpen ? "100%" : "0",
      // marginLeft: 40,
      // background: `${theme.colors.header}`,
    },
  });
  const fadeOutStyles = useSpring({
    config: { mass: 1, tension: 70, friction: 15 },

    from: { opacity: 1 },
    to: {
      opacity: 0,
    },
  });

  return (
    // <>
    <HeaderMenuContainer>
      <MenuButton isOpen={isOpen} toggle={toggle} />
      {/* <h1>Cat facts</h1> */}
      {isOpen ? (
        <animated.div
          style={{
            opacity: 1,
            display: "flex",
            alignItems: "center",
            marginLeft: 25,
            ...fadeOutStyles,
          }}
        >
          <h1>Cat facts.</h1>
        </animated.div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", marginLeft: 25 }}>
          <h1>Cat facts.</h1>
        </div>
      )}
      {isOpen && (
        <>
          <animated.div
            style={{
              // width: "100%",
              // height: 80,
              // zIndex: 0,
              display: "flex",
              alignItems: "center",
              position: "absolute",
              // marginLeft: 80,
              height: 60,
              // background: `${theme.colors.header}`,
              // borderRadius: "5px",
              ...fadeInStyles,
            }}
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
            <h2>Different themes for different tastes.</h2>
          </animated.div>
        </>
      )}
      {/* </> */}
    </HeaderMenuContainer>
  );
};

export default Header;

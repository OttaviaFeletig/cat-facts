import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "styled-components";

const AnimatedRect = ({ first, second, third, handleClick, className }) => {
  //   console.log("animations", animations);
  const theme = useTheme();
  return (
    <svg
      className={className}
      onClick={handleClick}
      width="40"
      height="32"
      viewBox="0 0 44 44"
      fill={theme.colors.cardBgc}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* {animations.map((animation) => (
        <animated.rect width="40" height="4" rx="2" style={animation} />
      ))} */}
      <animated.rect width="40" height="4" rx="2" style={first} />
      <animated.rect width="40" height="4" rx="2" style={second} />
      <animated.rect width="40" height="4" rx="2" style={third} />
    </svg>
  );
};

export default AnimatedRect;

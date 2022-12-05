import React from "react";
import { animated } from "react-spring";
import { useTheme } from "styled-components";

const AnimatedRect = ({
  animations,
  handleClick,
  className,
  n,
  width,
  height,
  rx,
}) => {
  const theme = useTheme();
  const rectangles = Array.from({ length: n }, (_, index) => {
    return (
      <animated.rect
        key={index}
        width={width}
        height={height}
        rx={rx}
        style={{ ...animations[index] }}
      />
    );
  });
  return (
    <svg
      className={className}
      onClick={handleClick}
      width={width}
      height={width}
      viewBox="0 0 44 44"
      fill={theme.colors.text}
      xmlns="http://www.w3.org/2000/svg"
    >
      {rectangles}
    </svg>
  );
};

export default AnimatedRect;

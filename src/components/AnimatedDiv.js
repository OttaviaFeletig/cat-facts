import React from "react";
import { useSpring, animated, config } from "react-spring";

const AnimatedDiv = ({
  elementStyle,
  animation,
  children,
  className,
  handleClick,
  isOpen,
}) => {
  return (
    <animated.div
      onClick={handleClick}
      className={className}
      style={{
        ...elementStyle,
        ...animation,
      }}
    >
      {children}
    </animated.div>
  );
};

export default AnimatedDiv;

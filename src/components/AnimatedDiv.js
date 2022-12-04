import React from "react";
import { animated } from "react-spring";

const AnimatedDiv = ({
  elementStyle,
  animation,
  children,
  className,
  handleClick,
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

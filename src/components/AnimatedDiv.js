import React from "react";
import { animated } from "react-spring";

const AnimatedDiv = ({
  elementStyle,
  animation,
  children,
  className,
  handleClick,
  onScroll,
}) => {
  return (
    <animated.div
      scroll={onScroll}
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

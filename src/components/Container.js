import React from "react";

const Container = ({ className, children, onScroll }) => {
  return <div className={className}>{children}</div>;
};

export default Container;

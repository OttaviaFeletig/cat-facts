const fadeInStyles = {
  config: { mass: 1, tension: 70, friction: 25 },
  from: { opacity: 0 },
  to: {
    opacity: 1,
  },
};
const fadeOutStyles = {
  config: { mass: 1, tension: 70, friction: 25 },

  from: { opacity: 1 },
  to: {
    opacity: 0,
  },
};

const rotateStyles = (isOpen) => {
  return {
    from: { rotateZ: isOpen ? 0 : 180 },
    to: { rotateZ: isOpen ? 180 : 0 },
  };
};
export { fadeInStyles, fadeOutStyles, rotateStyles };

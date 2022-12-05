const fadeInStyles = (isOpen) => {
  return {
    config: { mass: 1, tension: 70, friction: 25 },
    from: { opacity: isOpen ? 0 : 1 },
    to: {
      opacity: isOpen ? 1 : 0,
    },
  };
};
const fadeOutStyles = (isOpen) => {
  return {
    config: { mass: 1, tension: 70, friction: 25 },

    from: { opacity: isOpen ? 1 : 1 },
    to: {
      opacity: isOpen ? 0 : 1,
    },
  };
};

const rotateStyles = (isOpen) => {
  return {
    from: { rotateZ: isOpen ? 0 : 180 },
    to: { rotateZ: isOpen ? 180 : 0 },
  };
};

const first = (isOpen) => {
  return {
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)",
  };
};
const second = (isOpen) => {
  return {
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)",
  };
};
const third = (isOpen) => {
  return {
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)",
  };
};

// const prevPage1 = (isOpen) => {
//   return {
//     transform: isOpen
//       ? "translate(-12px, 32px) rotate(-45deg)"
//       : "translate(-20px, 32px) rotate(-45deg)",
//   };
// };

// const prevPage2 = (isOpen) => {
//   return {
//     transform: isOpen
//       ? "translate(-10px, 10px) rotate(45deg)"
//       : "translate(-17px, 10px) rotate(45deg)",
//   };
// };

export {
  fadeInStyles,
  fadeOutStyles,
  rotateStyles,
  first,
  second,
  third,
  // prevPage1,
  // prevPage2,
};

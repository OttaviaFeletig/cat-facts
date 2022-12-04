// import React, { useContext } from "react";
// import { useSpring, animated } from "react-spring";
// // import { ThemeContext } from "styled-components";
// import { useTheme } from "styled-components";
// import AnimatedDiv from "./AnimatedDiv";

// // const BAnim1 = ({ isOpen, onClick, className }) => {
// //   const theme = useTheme();

// //   console.log("Current theme: ", theme);
// //   const styles = useSpring({
// //     from: { rotateZ: isOpen ? 0 : 180 },
// //     to: { rotateZ: isOpen ? 180 : 0 },
// //   });
// //   return (
// //     <div className={className}>
// //       <animated.div
// //         onClick={onClick}
// //         style={{
// //           width: "100%",
// //           height: "100%",
// //           // zIndex: 100,
// //           background: `linear-gradient(to left,${theme.colors.background}, ${theme.colors.cardBgc})`,
// //           borderRadius: "50%",
// //           ...styles,
// //         }}
// //         className={className}
// //       />
// //     </div>
// //   );
// // };
// const Button = ({ isOpen, handleClick, rotate, className }) => {
//   // const rotate = useSpring({
//   //   from: { rotateZ: isOpen ? 0 : 180 },
//   //   to: { rotateZ: isOpen ? 180 : 0 },
//   // });
//   // const openMenu = () => toggle(!isOpen);
//   console.log("rotate", rotate);
//   return (
//     <AnimatedDiv
//       handleClick={handleClick}
//       isOpen={isOpen}
//       className={className}
//       style={{
//         width: "100%",
//         height: "100%",
//       }}
//       animation={rotate}
//     />
//   );
// };

// export default Button;

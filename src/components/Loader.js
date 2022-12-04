import React, { PureComponent } from "react";
import { Spring, animated } from "react-spring";

export class Loader extends PureComponent {
  static style = ({ props }) => ({
    border: "10px solid black",
    borderRadius: "100%",
    height: props.diameter,
    left: "50%",
    opacity: props.opacity,
    position: "absolute",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: props.diameter,
    zIndex: 1,
  });
  handleRest = () => {
    this.forceUpdate();
  };
  render() {
    return (
      <Spring
        reset
        from={{ opacity: 1, diameter: 0 }}
        to={{ opacity: 0, diameter: 100 }}
        onRest={this.handleRest}
      >
        {(props) => {
          console.log("props", props);
          return <animated.div style={Loader.style({ props })} />;
        }}
      </Spring>
    );
  }
}

export default Loader;

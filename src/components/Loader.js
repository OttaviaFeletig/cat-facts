import React, { PureComponent } from "react";
import { Spring, animated } from "react-spring";
import { useTheme } from "styled-components";

export class Loader extends PureComponent {
  static animation = ({ props }) => ({
    height: props.diameter,

    opacity: props.opacity,

    width: props.diameter,
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
          return (
            <animated.div
              style={Loader.animation({ props })}
              className={this.props.className}
            />
          );
        }}
      </Spring>
    );
  }
}

export default Loader;

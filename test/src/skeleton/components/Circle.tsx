import React, { Component } from "react";
import { CircleType } from '../types/Circle.type'
class Circle extends Component<CircleType> {
  render() {
    const { radius, stroke, strokeWidth, fill, cx = radius, cy = radius } = this.props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
    );
  }
}

export default Circle;

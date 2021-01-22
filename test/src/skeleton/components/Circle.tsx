import React, { Component } from "react";
import {CircleType} from '../types/Circle.type'
class Circle extends Component<CircleType> {
  render() {
    const {radius, stroke, strokeWidth} = this.props 
    return (
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke={stroke}
        stroke-width={strokeWidth}
        fill="yellow"
      />
    );
  }
}

export default Circle;

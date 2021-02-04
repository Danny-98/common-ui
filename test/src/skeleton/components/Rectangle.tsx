import React, { Component } from "react";
import { RectType } from '../types'
class Rectangle extends Component<RectType> {

  render() {
    const { heigth, width, x, y, fill, radiusX, radiusY } = this.props
    return (
      <rect x={x} y={y} rx={radiusX} ry={radiusY} width={width} height={heigth} fill={fill} />
    );
  }
}

export default Rectangle;

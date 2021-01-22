import React, { Component } from "react";
import { RectType } from '../types'
class Rectangle extends Component<RectType> {

  render() {
    const { heigth, width, } = this.props
    return (
      <rect x="0" y="105" rx="5" ry="5" width={width} height={heigth} />
    );
  }
}

export default Rectangle;

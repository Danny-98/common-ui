import React, { Component } from "react";

class Rectangle extends Component {
  render() {
    return (
      <svg width="400" height="180">
        <rect
          x="50"
          y="20"
          rx="20"
          ry="20"
          width="150"
          height="150"
          style="fill:red;stroke:black;stroke-width:5;opacity:0.5"
        />
      </svg>
    );
  }
}

export default Rectangle;

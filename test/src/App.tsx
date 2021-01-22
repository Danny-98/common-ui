import React, { Component } from "react";
import { SkContainer, SkCircle ,SkRect } from "./skeleton";
export default class app extends Component {
  render() {
    return (
      <div style={{ position: 'absolute', top: '50%', left: "50%", width:'500px', height:'300px', background:'green' }}>
        <SkContainer width={250} height={300} >
          <SkCircle radius={50}  fill="red" />
          <SkRect width={200} heigth={50} />
        </SkContainer>
      </div>
    );
  }
}

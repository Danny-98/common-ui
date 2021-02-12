import React, { Component } from "react";
import { SkContainer, SkRect, SkCircle } from "./skeleton";
export default class App extends Component {
  render() {
    return (
      <SkContainer width={500} height={200}>
        <SkRect />
        <SkCircle />
      </SkContainer>
    );
  }
}

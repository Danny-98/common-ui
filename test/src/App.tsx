import React, { Component } from "react";
import { Skeleton } from "./skeleton";
export default class app extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Skeleton />
      </div>
    );
  }
}

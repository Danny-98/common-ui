import React, { Component } from "react";
import { Container ,Circle } from "./skeleton";
export default class app extends Component {
  render() {
    return (
      <div>
        <Container width={250} height={250} >
          <Circle radius={10}/>
        </Container>
      </div>
    );
  }
}

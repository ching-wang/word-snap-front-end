import React, { Component } from "react";
import Card from "./Card";

class GameBoard extends Component {
  render() {
    const { pairsToRender } = this.props;
    return (
      <>
        <h1> This is GameBoard </h1>
        <Card />
      </>
    );
  }
}

export default GameBoard;

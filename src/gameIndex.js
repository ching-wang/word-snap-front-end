import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

class GameIndex extends Component {
  render() {
    const { pairsToRender } = this.props;
    return (
      <div>
        <GameBoard pairsToRender={pairsToRender} />
      </div>
    );
  }
}

export default GameIndex;

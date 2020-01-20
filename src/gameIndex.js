import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

class GameIndex extends Component {
  render() {
    const { pairsToRender, handleFaceUpCards } = this.props;
    return (
      <div>
        <GameBoard
          pairsToRender={pairsToRender}
          handleFaceUpCards={handleFaceUpCards}
        />
      </div>
    );
  }
}

export default GameIndex;

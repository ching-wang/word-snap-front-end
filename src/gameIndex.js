import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

class GameIndex extends Component {
  render() {
    const {
      pairsToRender,
      handleFaceUpCards,
      faceUpCardsArray,
      faceUpWords
    } = this.props;
    return (
      <div>
        <GameBoard
          pairsToRender={pairsToRender}
          handleFaceUpCards={handleFaceUpCards}
          faceUpCardsArray={faceUpCardsArray}
          faceUpWords={faceUpWords}
        />
      </div>
    );
  }
}

export default GameIndex;

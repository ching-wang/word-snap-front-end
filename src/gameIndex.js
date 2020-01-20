import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

class GameIndex extends Component {
  render() {
    const {
      pairsToRender,
      handleSelectedCard,
      selectedCard,
      doneCards,
      handleDoneCard
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <GameBoard
          pairsToRender={pairsToRender}
          handleSelectedCard={handleSelectedCard}
          selectedCard={selectedCard}
          doneCards={doneCards}
          handleDoneCard={handleDoneCard}
        />
      </div>
    );
  }
}

export default GameIndex;

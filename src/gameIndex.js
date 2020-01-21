import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
class GameIndex extends Component {
  render() {
    const {
      pairsToRender,
      handleSelectedCard,
      doneCards,
      handleDoneCard,
      onWrongCard
    } = this.props;
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <Player />
          </div>
          <div className="col-10">
            <GameBoard
              pairsToRender={pairsToRender}
              handleSelectedCard={handleSelectedCard}
              doneCards={doneCards}
              handleDoneCard={handleDoneCard}
              onWrongCard={onWrongCard}
            />
          </div>
          <div className="col-1">
            <Player />
          </div>
        </div>
      </div>
    );
  }
}
export default GameIndex;

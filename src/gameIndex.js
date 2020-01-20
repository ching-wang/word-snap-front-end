import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
class GameIndex extends Component {
  render() {
    const {
      pairsToRender,
      handleSelectedCard,
      selectedCard,
      doneCards,
      handleDoneCard,
      players
    } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <Player playerInfo={players.game_player_1_info} />
          </div>
          <div className="col-10">
            <GameBoard
              pairsToRender={pairsToRender}
              handleSelectedCard={handleSelectedCard}
              selectedCard={selectedCard}
              doneCards={doneCards}
              handleDoneCard={handleDoneCard}
            />
          </div>
          <div className="col-1">
            <Player playerInfo={players.game_player_2_info} />
          </div>
        </div>
      </div>
    );
  }
}
export default GameIndex;

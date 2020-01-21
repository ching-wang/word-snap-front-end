import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import TimeBar from "./components/TimeBar";

class GameIndex extends Component {
  render() {
    const {
      pairsToRender,
      handleSelectedCard,
      doneCards,
      handleDoneCard,
      onWrongCard,
      players
    } = this.props;

    return (
      <>
        <TimeBar />
        <div className="container game-board">
          <div className="row">
            <div className="col-1">
              <Player playerInfo={players.game_player_1_info} />
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
              <Player playerInfo={players.game_player_2_info} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GameIndex;

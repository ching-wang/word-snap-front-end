import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
class GameIndex extends Component {
  render() {
    const {
      pairsToRender,
      handleFaceUpCards,
      faceUpCardsArray,
      faceUpWords,
      players
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <Player/>
          </div>
          <div className="col-10">
            <GameBoard
              pairsToRender={pairsToRender}
              handleFaceUpCards={handleFaceUpCards}
              faceUpCardsArray={faceUpCardsArray}
              faceUpWords={faceUpWords}
            />
          </div>
        </div>
      </div>
     
    );
  }
}
export default GameIndex;
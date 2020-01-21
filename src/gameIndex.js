import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import TimeBar from "./components/TimeBar";

class GameIndex extends Component {
  playerOne = this.props.players.game_player_1_info;
  playerTwo = this.props.players.game_player_2_info;

  state = {
    currentPlayer: this.playerOne,
    click: 0
  };

  handleClickCount = () => {
    if (this.state.click === 0) {
      this.setState({ click: 1 });
    } else {
      this.changePlayer();
      this.setState({ click: 0 });
    }
  };

  changePlayer = () => {
    if (this.state.currentPlayer === this.playerOne) {
      this.setState({ currentPlayer: this.playerTwo });
    } else {
      this.setState({ currentPlayer: this.playerOne });
    }
  };

  render() {
    const {
      pairsToRender,
      handleSelectedCard,
      doneCards,
      handleDoneCard,
      onWrongCard,
      playerOneScore,
      playerTwoScore
    } = this.props;

    return (
      <>
        <TimeBar />
        <div className="container">
          <div className="row">
            <div className="col-1">
              <Player
                playerInfo={this.playerOne}
                currentPlayer={this.state.currentPlayer}
                playerScore={playerOneScore}
              />
            </div>
            <div className="col-10">
              <GameBoard
                pairsToRender={pairsToRender}
                handleSelectedCard={handleSelectedCard}
                doneCards={doneCards}
                handleDoneCard={handleDoneCard}
                onWrongCard={onWrongCard}
                clickCount={this.handleClickCount}
              />
            </div>
            <div className="col-1">
              <Player
                playerInfo={this.playerTwo}
                currentPlayer={this.state.currentPlayer}
                playerScore={playerTwoScore}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GameIndex;

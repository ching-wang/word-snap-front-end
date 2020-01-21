import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import TimeBar from "./components/TimeBar";

class GameIndex extends Component {
  state = {
    time: 5
  };

  componentDidMount() {
    this.interval = setInterval(this.timeCountDown, 1000);
  }

  timeCountDown = () => {
    if (this.state.time <= 1) {
      window.alert("GAME IS OVER! Would you like to play again?");
      clearInterval(this.interval);
    }

    this.setState(prevState => ({
      time: (prevState.time -= 1)
    }));
  };

  // componentDidMount()

  render() {
    const {
      pairsToRender,
      handleSelectedCard,
      doneCards,
      handleDoneCard,
      onWrongCard,
      playerOneScore,
      playerTwoScore,
      currentPlayer,
      players
    } = this.props;

    return (
      <>
        <TimeBar timeCount={this.state.time} />
        <div className="container">
          <div className="row">
            <div className="col-1">
              <Player
                playerInfo={players.game_player_1_info}
                currentPlayer={currentPlayer}
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
              />
            </div>
            <div className="col-1">
              <Player
                playerInfo={players.game_player_2_info}
                currentPlayer={currentPlayer}
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

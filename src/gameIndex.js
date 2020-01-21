import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import TimeBar from "./components/TimeBar";
import Swal from "sweetalert2";

class GameIndex extends Component {
  state = {
    time: 10
  };

  componentDidMount() {
    this.interval = setInterval(this.timeCountDown, 1000);
  }

  timeCountDown = () => {
    if (this.state.time <= 1) {
      this.showEndGamePopup(
        this.props.playerOneScore,
        this.props.playerTwoScore
      );
      this.props.updateScore(
        this.props.players.game_player_1_info.id,
        this.props.playerOneScore
      );

      this.props.updateScore(
        this.props.players.game_player_2_info.id,
        this.props.playerTwoScore
      );
      clearInterval(this.interval);
    }

    this.setState(prevState => ({
      time: (prevState.time -= 1)
    }));
  };

  showEndGamePopup = (playerOneScore, playerTwoScore) => {
    let winner = null;
    if (playerOneScore - playerTwoScore < 0) {
      winner = this.props.players.game_player_1_info;
    }
    if (playerTwoScore - playerOneScore < 0) {
      winner = this.props.players.game_player_1_info;
    }

    return Swal.fire({
      title:
        winner === null
          ? `Hey, it is a TIE`
          : `Seems like ${winner.player.username} won`,
      width: 600,
      padding: "3em",
      backdrop: `
        rgba(0,0,123,0.4)
        url("images/nyan-cat.gif")
        left top
        no-repeat
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Play again",
      confirmButtonAriaLabel: "",
      cancelButtonText: "Exit",
      cancelButtonAriaLabel: ""
    });
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

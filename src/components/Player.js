import React, { Component } from "react";

export class Player extends Component {
  render() {
    const { playerInfo, playerScore } = this.props;
    return (
      <div>
        <div
          className={
            this.props.currentPlayer === playerInfo
              ? "animaton-container active-turn"
              : "animaton-container"
          }
        >
          <h4 className="player-name">{playerInfo.player.username}</h4>
          <h3>
            <span className="score">{playerScore}</span>
          </h3>
          {this.props.currentPlayer === playerInfo ? (
            <h1>
              <br></br>
              <br></br>
              <br></br>
              <span>Y</span>
              <span>O</span>
              <span>U</span>
              <span>R</span>
              <span> </span>
              <span>T</span>
              <span>U</span>
              <span>R</span>
              <span>N</span>
            </h1>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Player;

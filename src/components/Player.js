import React, { Component } from "react";

export class Player extends Component {
  render() {
    const { playerInfo } = this.props;
    return (
      <div>
        <h4 className="player-name">{playerInfo.player.username}</h4>
        <div className="animaton-container">
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

        <h3>
          <span className="score">{playerInfo.score}</span>
        </h3>
      </div>
    );
  }
}

export default Player;

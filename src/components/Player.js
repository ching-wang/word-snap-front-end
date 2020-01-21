import React, { Component } from "react";

export class Player extends Component {
  render() {
    const { playerInfo } = this.props;
    return (
      <div>
        <h4 className="player-name">{playerInfo.player.username}</h4>
        <h3>
          <span className="score">{playerInfo.score}</span>
        </h3>
      </div>
    );
  }
}

export default Player;

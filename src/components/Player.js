import React, { Component } from "react";

export class Player extends Component {
  render() {
    const { playerInfo } = this.props;
    return (
      <div>
        <h5>{playerInfo.player.username}</h5>
        <p>
          {this.props.currentPlayer === playerInfo ? "It is your turn" : null}
        </p>
      </div>
    );
  }
}

export default Player;

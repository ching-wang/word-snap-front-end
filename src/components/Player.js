import React, { Component } from "react";

export class Player extends Component {
  render() {
    const { playerInfo } = this.props;
    return (
      <div>
        <h5>{playerInfo.player.username}</h5>
      </div>
    );
  }
}

export default Player;

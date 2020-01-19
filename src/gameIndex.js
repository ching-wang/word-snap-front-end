import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import { getPairs } from "./API";

class GameIndex extends Component {
  state = {
    pairs: []
  };

  componentDidMount() {
    document.body.style.backgroundColor = "orange";
    getPairs().then(pairs =>
      this.setState({
        pairs
      })
    );
  }

  render() {
    const { pairs } = this.state;

    return (
      <div>
        <GameBoard pairsToRender={pairs} />
      </div>
    );
  }
}

export default GameIndex;

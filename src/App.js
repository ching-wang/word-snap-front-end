import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import GameIndex from "./gameIndex";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    player_1: "",
    player_2: "",
    gameOn: false
  };
  login = (player_1, player_2) => {
    console.log(`player 1: ${player_1} player 2: ${player_2}`);
    this.setState({ gameOn: !this.state.gameOn });
  };

  render() {
    return (
      <>
        <Header />
        {!this.state.gameOn && <LoginForm handleLogin={this.login} />}
        {this.state.gameOn && <GameIndex />}{" "}
      </>
    );
  }
}
export default App;

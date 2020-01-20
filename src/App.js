import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import GameIndex from "./gameIndex";
import LoginForm from "./components/LoginForm";
import { getPairs } from "./API";

const NewGame = "http://localhost:3000/newgame";

class App extends Component {
  state = {
    player_1: "",
    player_2: "",
    gameOn: false,
    players: {},
    pairs: [],
    selectedCard: null,
    doneCards: []
  };

  handleSelectedCard = pairId => {
    this.setState({ selectedCard: pairId });
  };
  handleDoneCard = pairId => {
    this.setState({ ...this.state.doneCards, pairId }, { selectedCard: null });
  };

  componentDidMount() {
    getPairs().then(pairs => {
      this.setState({
        pairs
      });
    });
  }

  login = (player_1, player_2) => {
    fetch(NewGame, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ players: { user_1: player_1, user_2: player_2 } })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ players: data, gameOn: !this.state.gameOn });
      });
  };

  render() {
    const { pairs, selectedCard, doneCards, players } = this.state;

    return (
      <>
        <Header />
        {!this.state.gameOn && <LoginForm handleLogin={this.login} />}
        {this.state.gameOn && (
          <GameIndex
            pairsToRender={pairs}
            handleSelectedCard={this.handleSelectedCard}
            selectedCard={selectedCard}
            doneCards={doneCards}
            handleDoneCard={this.handleDoneCard}
            players={players}
          />
        )}
      </>
    );
  }
}
export default App;

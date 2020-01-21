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
    doneCards: [],
    frozen: false,
    intervalId: 0
  };

  handleSelectedCard = wordInfo => {
    if (this.state.frozen === true) {
      return;
    }
    this.setState({
      doneCards: [...this.state.doneCards, wordInfo]
    });
  };

  handleDoneCard = singleWord => {
    if (this.state.frozen === true) {
      return;
    }
    this.setState({
      doneCards: [...this.state.doneCards, singleWord]
    });
  };

  removeLastTwoCards = () => {
    let doneCards = [...this.state.doneCards];
    doneCards.pop();
    doneCards.pop();

    return doneCards;
  };

  onWrongCard = wordInfo => {
    if (this.state.frozen === true) {
      return;
    }

    this.frozeGameFor(2, () => {
      let cardsWithoutLastSelectedTwo = this.removeLastTwoCards();
      this.setState({
        doneCards: cardsWithoutLastSelectedTwo
      });
    });

    this.setState({ doneCards: [...this.state.doneCards, wordInfo] });
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

  unfreezeGame = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: 0, frozen: false });
  };

  frozeGameFor = (seconds, callback) => {
    const secondsToMs = 1000;
    let intervalId = setInterval(() => {
      this.unfreezeGame();
      callback();
    }, seconds * secondsToMs);
    this.setState({ intervalId: intervalId, frozen: true });
  };

  render() {
    const { pairs, doneCards } = this.state;


    return (
      <>
        <Header />
        {!this.state.gameOn && <LoginForm handleLogin={this.login} />}
        {this.state.gameOn && (
          <GameIndex
            pairsToRender={pairs}
            handleSelectedCard={this.handleSelectedCard}
            doneCards={doneCards}
            handleDoneCard={this.handleDoneCard}
            onWrongCard={this.onWrongCard}
            players={players}

          />
        )}
      </>
    );
  }
}
export default App;

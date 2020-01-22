import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import GameIndex from "./gameIndex";
import LoginForm from "./components/LoginForm";
import { getPairs } from "./API";

const NewGame = "http://localhost:3000/newgame";

class App extends Component {
  state = {
    gameOn: false,
    players: {},
    pairs: [],
    doneCards: [],
    frozen: false,
    intervalId: 0,
    singleWords: [],
    playerOneScore: 0,
    playerTwoScore: 0,
    winner: null,
    currentPlayer: null
  };

  // changing turns

  changePlayer = () => {
    if (this.state.currentPlayer === this.state.players.game_player_1_info) {
      this.setState({ currentPlayer: this.state.players.game_player_2_info });
    } else {
      this.setState({ currentPlayer: this.state.players.game_player_1_info });
    }
  };

  singleWords = pairs => {
    const singleWords = [];
    for (const pair of pairs) {
      singleWords.push({
        pairId: pair.id,
        word: pair.english,
        lang: "english"
      });
      singleWords.push({
        pairId: pair.id,
        word: pair.chinese,
        lang: "chinese"
      });
    }
    return singleWords;
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
    if (this.state.currentPlayer === this.state.players.game_player_1_info) {
      this.setState({ playerOneScore: this.state.playerOneScore + 1 });
    } else {
      this.setState({ playerTwoScore: this.state.playerTwoScore + 1 });
    }
    this.changePlayer();
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

    this.frozeGameFor(1, () => {
      let cardsWithoutLastSelectedTwo = this.removeLastTwoCards();
      this.setState({
        doneCards: cardsWithoutLastSelectedTwo
      });
      this.changePlayer();
    });

    this.setState({ doneCards: [...this.state.doneCards, wordInfo] });
  };

  componentDidMount() {
    getPairs().then(pairs => {
      this.setState({
        pairs: pairs,
        singleWords: this.singleWords(pairs).sort(() => 0.5 - Math.random())
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
        this.setState({
          players: data,
          gameOn: !this.state.gameOn,
          currentPlayer: data.game_player_1_info
        });
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
    const {
      singleWords,
      doneCards,
      players,
      playerOneScore,
      playerTwoScore,
      currentPlayer
    } = this.state;

    return (
      <>
        <Header />
        {!this.state.gameOn && <LoginForm handleLogin={this.login} />}
        {this.state.gameOn && (
          <GameIndex
            pairsToRender={singleWords}
            handleSelectedCard={this.handleSelectedCard}
            doneCards={doneCards}
            handleDoneCard={this.handleDoneCard}
            onWrongCard={this.onWrongCard}
            players={players}
            playerOneScore={playerOneScore}
            playerTwoScore={playerTwoScore}
            currentPlayer={currentPlayer}
          />
        )}
      </>
    );
  }
}
export default App;

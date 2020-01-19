import React, { Component } from "react";
import Card from "./Card";

class GameBoard extends Component {
  singleWords() {
    const { pairsToRender } = this.props;

    const singleWords = [];
    for (const pair of pairsToRender) {
      singleWords.push({ pairId: pair.id, word: pair.english });
      singleWords.push({ pairId: pair.id, word: pair.chinese });
    }

    // Shuffle the array of single words.
    singleWords.sort(() => 0.5 - Math.random());

    return singleWords;
  }

  render() {
    const { pairsToRender } = this.props;

    const singleWords = [
      { pairId: 1, word: "water" },
      { pairId: 1, word: "shui" }
    ];

    return (
      <>
        <h1> This is GameBoard </h1>
        <div className="container">
          <div className="row">
            {pairsToRender.map((pair, i) => {
              return (
                <>
                  <div className="col">
                    <Card pair={pair} key={pair.id} />
                  </div>
                  {(i + 1) % 4 === 0 ? (
                    <>
                      <hr></hr>
                      <div class="w-100"></div>
                    </>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default GameBoard;

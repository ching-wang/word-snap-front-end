import React, { Component, Fragment } from "react";
import Card from "./Card";
class GameBoard extends Component {
  singleWords() {
    const { pairsToRender } = this.props;
    const singleWords = [];
    for (const pair of pairsToRender) {
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
    // Shuffle the array of single words.
    // singleWords.sort(() => 0.5 - Math.random());
    return singleWords;
  }
  render() {
    const {
      handleSelectedCard,
      doneCards,
      handleDoneCard,
      onWrongCard,
      clickCount
    } = this.props;
    const singleWords = this.singleWords();
    return (
      <div className="board-container">
        {singleWords.map((singleWord, i) => {
          return (
            <Fragment key={`${singleWord.pairId}-${singleWord.lang}`}>
              <Card
                singleWord={singleWord}
                handleSelectedCard={handleSelectedCard}
                doneCards={doneCards}
                handleDoneCard={handleDoneCard}
                onWrongCard={onWrongCard}
                clickCount={clickCount}
              />
            </Fragment>
          );
        })}
      </div>
      // </div>
    );
  }
}
export default GameBoard;

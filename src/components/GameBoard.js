import React, { Component, Fragment } from "react";
import Card from "./Card";
class GameBoard extends Component {
  render() {
    const {
      pairsToRender,
      handleSelectedCard,
      doneCards,
      handleDoneCard,
      onWrongCard,
      clickCount
    } = this.props;
    // const singleWords = this.singleWords();

    // const shuffledSingleWords = singleWords.sort(() => 0.5 - Math.random());
    return (
      <div className="board-container">
        {pairsToRender.map((singleWord, i) => {
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

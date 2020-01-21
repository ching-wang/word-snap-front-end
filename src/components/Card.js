import React, { Component } from "react";

class Card extends Component {
  shouldShow = (doneCards, singleWord) => {
    return (
      doneCards.find(
        wordInfo =>
          wordInfo.pairId === singleWord.pairId &&
          wordInfo.word === singleWord.word
      ) !== undefined
    );
  };

  getLastSelectedCard = cards => {
    if (cards.length === 0) {
      return null;
    }
    return cards[cards.length - 1];
  };

  hasFirstCardInTurnBeenSelected = cards => {
    return cards.length % 2 !== 0;
  };

  render() {
    const {
      singleWord,
      handleSelectedCard,
      doneCards,
      handleDoneCard,
      onWrongCard
    } = this.props;

    let selectedCard = this.getLastSelectedCard(doneCards);
    const showing = this.shouldShow(doneCards, singleWord, selectedCard);

    return (
      <div
        className="card text-white bg-dark word-card"
        onClick={() => {
          if (this.hasFirstCardInTurnBeenSelected(doneCards) === false) {
            handleSelectedCard(singleWord);
          } else {
            // If you selected the same card again, do nothing.
            if (selectedCard.word === singleWord.word) {
              return;
            }
            /* selectedCard is not null, therefore this is the second card that we are clicking on
             * if the already selected card is the correspondent card (its pairId is the same as mine)
             * then we have found a pair. Else, we have not found a pair, and we need to unselect the selected
             * card (set selected to null, via a callback)
             */
            if (selectedCard.pairId === singleWord.pairId) {
              handleDoneCard(singleWord);
            } else {
              onWrongCard(singleWord);
            }
          }
        }}
      >
        <div>
          <h3 className="card-title">
            <span
              className={
                singleWord.lang === "english" ? "text-info" : "text-danger"
              }
            >
              {showing ? singleWord.word : "x"}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Card;

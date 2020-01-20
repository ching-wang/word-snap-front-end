import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    const {
      singleWord,
      handleSelectedCard,
      selectedCard,
      doneCards,
      handleDoneCard
    } = this.props;

    return (
      <div
        className="card text-white bg-dark word-card"
        onClick={() => {
          if (selectedCard === null) {
            handleSelectedCard(singleWord);
          } else {
            if (selectedCard.pairId === singleWord.pairId) {
              handleDoneCard(singleWord.pairId);
            }
          }
        }}
      >
        <div className="card-body">
          <h3 className="card-title">
            <span
              className={
                singleWord.lang === "english" ? "text-info" : "text-danger"
              }
            >
              {selectedCard !== null &&
              selectedCard.word === singleWord.word ? (
                singleWord.word
              ) : (
                <>
                  X
                  <br />
                  &nbsp;
                </>
              )}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Card;

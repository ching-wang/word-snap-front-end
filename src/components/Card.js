import React, { Component } from "react";

class Card extends Component {
  render() {
    const {
      singleWord,
      handleFaceUpCards,
      faceUpCardsArray,
      faceUpWords
    } = this.props;

    return (
      <div
        className="card text-white bg-dark"
        onClick={() => handleFaceUpCards(singleWord)}
      >
        <div className="card-body">
          <h3 className="card-title">
            <span
              className={
                singleWord.lang === "english" ? "text-info" : "text-danger"
              }
            >
              {faceUpCardsArray.includes(singleWord.pairId) &&
              faceUpWords.includes(singleWord.word)
                ? singleWord.word
                : "X"}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Card;

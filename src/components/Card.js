import React, { Component } from "react";

class Card extends Component {
  state = {
    faceUp: false
  };

  handleClick() {
    console.log("CLICK");
    this.setState({ faceUp: !this.state.faceUp });
  }

  render() {
    const { singleWord, handleFaceUpCards } = this.props;

    return (
      <div
        className="card text-white bg-dark"
        onClick={() => handleFaceUpCards(singleWord.pairId)}
      >
        <div className="card-body">
          <h3 className="card-title">
            <span
              className={
                singleWord.lang === "english" ? "text-info" : "text-danger"
              }
            >
              {this.state.faceUp ? singleWord.word : "X"}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Card;

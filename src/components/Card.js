import React, { Component } from "react";

class Card extends Component {
  state = {
    faceUp: false
  };

  handleClick() {
    this.setState({ faceUp: !this.state.faceUp });
  }

  render() {
    const { singleWord } = this.props;

    return (
      <div
        className="card text-white bg-dark"
        onClick={() => this.handleClick()}
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

import React, { Component } from "react";

class Card extends Component {
  render() {
    const { pair } = this.props;

    return (
      <div className="card text-white bg-dark">
        <div className="card-body">
          <h5 class="card-title">{pair.chinese}</h5>
          <h5 class="card-title">{pair.english}</h5>
        </div>
      </div>
    );
  }
}

export default Card;

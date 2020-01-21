import React, { Component } from "react";

const TimeBar = ({ timeCount }) => {
  return (
    <>
      <section className="time-panel">
        <div className="timeElapsed">
          Time left: <span className="timeCount">{timeCount}</span>
        </div>
      </section>
    </>
  );
};

export default TimeBar;

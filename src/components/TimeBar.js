import React, { Component } from "react";
import ReactCountdownClock from "react-countdown-clock";
const TimeBar = ({ timeCount }) => {
  return (
    <>
      <section className="time-panel">
        <div className="timeElapsed">
          Time left: <span className="timeCount">{timeCount}</span>
        </div>
      </section>

      {/* <ReactCountdownClock
          seconds={60}
          size={50}
          alpha={0.9}
          color="#33cccc"
        /> */}
    </>
  );
};

export default TimeBar;

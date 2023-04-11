import React, { Component } from "react";
import Label from "./Label";
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <Label message="Good" total={good} />
        <Label message="Neutral" total={neutral} />
        <Label message="Bad" total={bad} />
        <Label message="Total" total={total} />
        <Label message="Positive feedback" total={positivePercentage} />
      </>
    );
  }
}

export default Statistics;

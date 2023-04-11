import React, { Component } from "react";
import Button from "./Button";

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <Button title="good" />
        <Button title="neutral" />
        <Button title="bad" />
      </>
    );
  }
}

export default FeedbackOptions;

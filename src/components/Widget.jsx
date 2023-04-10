import React, { Component } from "react";
import Button from "./Button";
import Label from "./Label";

import classes from "./Widget.module.css";

class Widget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickButtonHandler = (e) => {
    const key = e.target.textContent.toLowerCase();

    if (key in this.state) {
      this.setState((prevState) => {
        return { [key]: prevState[key] + 1 };
      });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    const buttons = Object.keys(this.state).map((key, id) => {
      return <Button title={key} key={id} />;
    });

    return (
      <div className={classes.widget}>
        <h2> PLease leave feedback</h2>
        <div className={classes.btns} onClick={this.clickButtonHandler}>
          {buttons}
        </div>
        <h2>Statistics</h2>
        <div className={classes.statistics}>
          <Label message="Good" total={good} />
          <Label message="Neutral" total={neutral} />
          <Label message="Bad" total={bad} />
        </div>
      </div>
    );
  }
}

export default Widget;

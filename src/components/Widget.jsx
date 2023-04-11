import React, { Component } from "react";

import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

import classes from "./Widget.module.css";

class Widget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedback: 0,
  };

  clickButtonHandler = (e) => {
    const key = e.target.textContent.toLowerCase();
    if (key in this.state) {
      this.setState(
        (prevState) => {
          return {
            [key]: prevState[key] + 1,
          };
        },
        () => {
          const { good, neutral, bad } = this.state;
          const total = good + neutral + bad;
          const feedback = Math.round((good * 100) / total);
          this.setState({ total, feedback });
        }
      );
    }
  };

  render() {
    const { good, neutral, bad, total, feedback } = this.state;

    return (
      <div className={classes.widget}>
        <Section
          title={"please leave feedback"}
          onClickHandler={this.clickButtonHandler}
          className={classes.btns}
        >
          <FeedbackOptions />
        </Section>

        <Section
          title={"Statistics"}
          onClickHandler={this.clickButtonHandler}
          className={classes.statistics}
        >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={feedback}
          />
        </Section>
      </div>
    );
  }
}

export default Widget;

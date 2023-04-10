import React, { Component } from "react";

import classes from "./Label.module.css";

class Label extends Component {
  render() {
    const { message, total } = this.props;

    return (
      <p className={classes.title}>
        {message}: {total}
      </p>
    );
  }
}

export default Label;

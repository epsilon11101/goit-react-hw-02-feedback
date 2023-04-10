import React, { Component } from "react";

import classes from "./Button.module.css";

class Button extends Component {
  render() {
    const { title } = this.props;
    return (
      <button type="button" className={classes.btn}>
        {title}
      </button>
    );
  }
}
export default Button;

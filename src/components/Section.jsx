import React, { Component } from "react";

class Section extends Component {
  render() {
    const { title, children, onClickHandler, className } = this.props;

    return (
      <div onClick={onClickHandler} style={{ width: "100%" }}>
        {title && (
          <h2
            style={{
              textTransform: "capitalize",
              fontSize: "3rem",
            }}
          >
            {title}
          </h2>
        )}
        <div className={className}>{children}</div>
      </div>
    );
  }
}

export default Section;

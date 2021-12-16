import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {
  state = {};
  render() {
    return (
      <button className="button"
        onClick={() => this.props.onclick1(this.props.value)}
        style={{ backgroundColor: this.props.bgcolor, color: this.props.color }}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Buttons;

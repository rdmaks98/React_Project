import React, { Component } from "react";
import "./Display.css";
import Buttons from "./Buttons";
import { evaluate } from "mathjs";

const digits = ["1", "0", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["/", "*", "-", "+", "="];

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      operator: null,
      waitingForOperand: false,
      firstOperand: false,
    };
  }

  processDigit = (newKeyValue) => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: newKeyValue,
        waitingForOperand: false,
      });
    } else {
      let newDisplayValue =
        displayValue === "0" ? newKeyValue : `${displayValue}${newKeyValue}`;
      this.setState({
        displayValue: newDisplayValue,
        waitingForOperand: false,
      });
    }
  };

  processOperator = (newKeyValue) => {
    const {
      displayValue,
      operator,
      waitingForOperand,
      firstOperand,
    } = this.state;
    let newDisplayValue = null;
    let newOperator = null;
    let stringToEvaluate = null;

    if (firstOperand === false || operator == null || waitingForOperand) {
      this.setState({
        waitingForOperand: true,
        firstOperand: displayValue,
        operator: newKeyValue,
      });
      return;
    } else {
      stringToEvaluate = `${firstOperand}${operator}${displayValue}`;
      try {
        newDisplayValue = evaluate(stringToEvaluate);
      } catch (e) {
        newDisplayValue = "0";
      }
      if (newDisplayValue === Infinity) {
        newDisplayValue = "0";
      }
      newOperator = newKeyValue === "=" ? null : newKeyValue;
      this.setState({
        displayValue: newDisplayValue,
        waitingForOperand: true,
        firstOperand: newDisplayValue,
        operator: newOperator,
      });
    }
  };

  processPoint = (newKeyValue) => {
    const { displayValue, waitingForOperand } = this.state;

    let needPoint = `${displayValue}`.indexOf(".") === -1 ? true : false;
    let newDisplayValue = null;

    if (waitingForOperand) {
      this.setState({
        displayValue: "0.",
        waitingForOperand: false,
      });
    } else {
      if (needPoint) {
        newDisplayValue = `${displayValue}${newKeyValue}`;
        this.setState({
          displayValue: `${newDisplayValue}`,
          waitingForOperand: false,
        });
      }
    }
  };

  processPercentage = (newKeyValue) => {
    const { displayValue } = this.state;
    const newDisplayValue = parseFloat(displayValue) / 100;
    this.setState({
      displayValue: newDisplayValue,
      waitingForOperand: false,
    });
  };

  processPlusMinusToggle = (newKeyValue) => {
    const { displayValue } = this.state;
    this.setState({
      displayValue: parseFloat(displayValue) * -1,
      waitingForOperand: false,
    });
  };

  processClear = () => {
    this.setState({
      displayValue: "0",
      firstOperand: false,
      operator: null,
      waitingForOperand: false,
    });
  };

  processFunctionKey = (newKeyValue) => {
    switch (newKeyValue) {
      case "AC":
        this.processClear(newKeyValue);
        break;
      case "+/-":
        this.processPlusMinusToggle(newKeyValue);
        break;
      case ".":
        this.processPoint(newKeyValue);
        break;
      case "%":
        this.processPercentage(newKeyValue);
        break;
      default:
        this.processUnknownKey(newKeyValue);
    }
  };

  handleClick = (value) => {
    this.processNewKey(value);
  };

  processNewKey = (newKeyValue) => {
    const isDigit = digits.includes(newKeyValue);
    const isOperator = operators.includes(newKeyValue);

    if (isDigit) {
      this.processDigit(newKeyValue);
    } else {
      if (isOperator) {
        this.processOperator(newKeyValue);
      } else {
        this.processFunctionKey(newKeyValue);
      }
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="display">
          <div className="result">{this.state.displayValue}</div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="AC" value="AC" onclick1={this.handleClick} />
          </div>
          <div className="col-sm- row1 col-md-3 col-lr-3 row1">
            <Buttons name="+/-" value="+/-" onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="%" value="%" onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="÷"
              value="/"
              color="white"
              onclick1={this.handleClick}
              bgcolor="#F5923E"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="7" value="7" onclick1={this.handleClick} />
          </div>
          <div className="col-sm- row1 col-md-3 col-lr-3 row1">
            <Buttons name="8" value="8" onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="9" value="9" onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="x"
              value="*"
              color="white"
              onclick1={this.handleClick}
              bgcolor="#F5923E"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="4" value="4" onclick1={this.handleClick} />
          </div>
          <div className="col-sm- row1 col-md-3 col-lr-3 row1">
            <Buttons name="5" value="5" onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="6" value="6" onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="-"
              color="white"
              value="-"
              onclick1={this.handleClick}
              bgcolor="#F5923E"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="1" value="1" onclick1={this.handleClick} />
          </div>
          <div className="col-sm- row1 col-md-3 col-lr-3 row1">
            <Buttons name="2" value="2" onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="3" value="3" onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="+"
              value="+"
              color="white"
              onclick1={this.handleClick}
              bgcolor="#F5923E"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 col-lr-6 row2">
            <Buttons name="0" value="0" onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="." value="." onclick1={this.handleClick} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="="
              color="white"
              value="="
              onclick1={this.handleClick}
              bgcolor="#F5923E"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;

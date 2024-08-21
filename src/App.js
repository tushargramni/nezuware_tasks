import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0");
  const [lastInput, setLastInput] = useState(null);

  const val = (e) => {
    if (e === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (e === "C") {
      setInput("0");
    } else if (e === "X") {
      setInput(input.length > 1 ? input.slice(0, -1) : "0");
    } else if ("+-*/%".includes(e)) {
      if ("+-*/%".includes(lastInput)) {
        setInput(input.slice(0, -1) + e);
      } else {
        setInput(input + e);
      }
    } else {
      if (input === "0" && e !== ".") {
        setInput(e);
      } else {
        setInput(input + e);
      }
    }
    setLastInput(e);
  };

  return (
    <div>
      <div className="bg">
        <header>Calculator</header>
        <section className="calci">
          <div className="number digital-text" title="Input field" readOnly>
            {input}
          </div>
          <hr />
          <div className="btn">
            <span className="op" onClick={() => val("C")} title="Clear all input field">
              C
            </span>
            <span className="op" onClick={() => val("X")} title="Clear single digit">
              del
            </span>
            <span className="op" onClick={() => val("%")} title="Modulus Operator">
              %
            </span>
            <span className="op" onClick={() => val("/")} title="Division Operator">
              /
            </span>
            <span className="no" onClick={() => val("7")} title="Integer value">
              7
            </span>
            <span className="no" onClick={() => val("8")} title="Integer value">
              8
            </span>
            <span className="no" onClick={() => val("9")} title="Integer value">
              9
            </span>
            <span className="op" onClick={() => val("*")} title="Multiplication Operator">
              *
            </span>
            <span className="no" onClick={() => val("4")} title="Integer value">
              4
            </span>
            <span className="no" onClick={() => val("5")} title="Integer value">
              5
            </span>
            <span className="no" onClick={() => val("6")} title="Integer value">
              6
            </span>
            <span className="op" onClick={() => val("-")} title="Subtraction Operator">
              -
            </span>
            <span className="no" onClick={() => val("1")} title="Integer value">
              1
            </span>
            <span className="no" onClick={() => val("2")} title="Integer value">
              2
            </span>
            <span className="no" onClick={() => val("3")} title="Integer value">
              3
            </span>
            <span className="op" onClick={() => val("+")} title="Addition Operator">
              +
            </span>
            <span className="no" onClick={() => val("0")} title="Integer value">
              0
            </span>
            <span className="no" onClick={() => val(".")} title="Decimal point">
              .
            </span>
            <span className="no" onClick={() => val("00")} title="Integer value">
              00
            </span>
            <span className="fn" onClick={() => val("=")} title="Calculate result">
              =
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

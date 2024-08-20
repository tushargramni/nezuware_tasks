import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0");

  let i = document.querySelector(".number");
  let op = 0,
    v = 0,
    c = 0;
  s;
  const val = (e) => {
    if (c === 0) {
      // i.innerHTML = "0";
      setInput((i.innerHTML = "0"));
    }
    if (e === "=") {
      try {
        // eslint-disable-next-line no-eval
        setInput((i.innerHTML = eval(i.innerHTML)));
      } catch {
        setInput((i.innerHTML = "Error"));
      }
    } else if (e === "C") {
      setInput((i.innerHTML = "0"));
    } else if (e === "+" || e === "-" || e === "*" || e === "/" || e === "%") {
      setInput((op = i.innerHTML));

      if (op === "" || op === "0" || "+-*/%".includes(op[op.length - 1])) {
        // Replace the last operator if there's any
        setInput((i.innerHTML = op.slice(0, -1) + e));
      } else {
        setInput((i.innerHTML += e));
      }
    } else if (e === "X") {
      v = i.innerHTML;
      if (v.length === 1) {
        setInput((i.innerHTML = "0"));
      } else {
        v = v.slice(0, v.length - 1);
        setInput((i.innerHTML = v));
      }
    } else {
      if (i.innerHTML === "0" && e !== ".") {
        setInput((i.innerHTML = e));
      } else if (i.innerHTML.includes(".") && e === ".") {
        // Prevent multiple dots in the same number
        return;
      } else {
        setInput((i.innerHTML += e));
      }
    }
    c++;
  };

  return (
    <div>
      <div className="bg">
        <header>Calculator</header>
        <section className="calci">
          <div className="number digital-text" title="Input field" readOnly>
            {input}
          </div>
          <div className="btn">
            <span
              className="op"
              onClick={() => val("C")}
              title="clear all input field"
            >
              C
            </span>
            <span
              className="op"
              onClick={() => val("X")}
              title="Clear single digit"
            >
              del
            </span>
            <span
              className="op"
              onClick={() => val("%")}
              title="Modulus Operator"
            >
              %
            </span>
            <span
              className="op"
              onClick={() => val("/")}
              title="division Operator"
            >
              /
            </span>
            <span className="un" onClick={() => val("7")} title="Integer value">
              7
            </span>
            <span className="no" onClick={() => val("8")} title="Integer value">
              8
            </span>
            <span className="no" onClick={() => val("9")} title="Integer value">
              9
            </span>
            <span className="op" onClick={() => val("*")} title="operator">
              *
            </span>
            <span
              className="un"
              onClick={() => val("4")}
              title="Interger value"
            >
              4
            </span>
            <span
              className="no"
              onClick={() => val("5")}
              title="Interger value"
            >
              5
            </span>
            <span
              className="no"
              onClick={() => val("6")}
              title="Interger value"
            >
              6
            </span>
            <span className="op" onClick={() => val("-")} title="operator">
              -
            </span>
            <span className="un" onClick={() => val("1")} title="Integer value">
              1
            </span>
            <span className="no" onClick={() => val("2")} title="Integer value">
              2
            </span>
            <span className="no" onClick={() => val("3")} title="Integer value">
              3
            </span>
            <span className="op" onClick={() => val("+")} title="operator">
              +
            </span>
            <span className="un" onClick={() => val("0")} title="Integer value">
              0
            </span>
            <span className="un" onClick={() => val(".")} title="dot operator">
              .
            </span>
            <span
              className="un"
              onClick={() => val("00")}
              title="Integer value"
            >
              00
            </span>
            <span className="fn" onClick={() => val("=")} title="Final result">
              =
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { join } from "lodash";
import "./style.css";
import icon from "./icon.png";
import printMe from "./print.js";

class App extends React.Component {
  render() {
    const message = join(["Hello World!"], " ");















    return (
                                                            <div>
        <div className={"hello"}>{message}</div>
        <img src={icon} alt={"a desert at night"} />
        <button onClick={printMe}>Click me and check the console</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import icon from "./icon.png";
import HelloWorld from "./components/HelloWorld";
import HelloTypeScript from "./components/HelloTypeScript";

function App() {
  return (
    <div>
      <HelloWorld descriptor="Webpack" />
      <HelloTypeScript compiler="TypeScript" framework="React" />
      <img src={icon} alt="a desert at night" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

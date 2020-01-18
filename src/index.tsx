import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import icon from "./icon.png";
import printMe from "./print";
import HelloWorld from "./components/HelloWorld";
import HelloTypeScript from "./components/HelloTypeScript";

function App() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!");
  } else {
    console.log("wow production modeeee");
  }

  return (
    <div>
      <HelloWorld />
      <HelloTypeScript compiler="TypeScript" framework="React" />
      <img src={icon} alt="a desert at night" />
      <div>
        <button type="button" onClick={printMe}>
          Click me and check the console
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

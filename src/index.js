import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import icon from "./icon.png";
import printMe from "./print";
import HelloWorld from "./components/HelloWorld";

function App() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!");
  } else {
    console.log("wow production modeeee");
  }

  return (
    <div>
      <HelloWorld />
      <img src={icon} alt="a desert at night" />
      <button type="button" onClick={printMe}>
        Click me and check the console
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

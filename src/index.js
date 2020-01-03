import { join } from "lodash";
import "./style.css";
import icon from "./icon.png";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const button = document.createElement("button");

  element.innerHTML = join(["Output", "Management"], " ");
  element.classList.add("hello");

  button.innerHTML = "Click me and check the console";
  button.onclick = printMe;

  const myIcon = new Image();
  myIcon.src = icon;

  element.appendChild(myIcon);
  element.appendChild(button);

  return element;
}

document.body.appendChild(component());

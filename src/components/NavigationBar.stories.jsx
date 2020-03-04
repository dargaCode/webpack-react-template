import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default {
  title: "NavigationBar",
  component: NavigationBar
};

export const Basic = () => (
  <Router>
    <NavigationBar />
  </Router>
);

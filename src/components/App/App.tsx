import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "../../app/store";

import NavigationBar from "../navigation/NavigationBar";
import AboutSection from "../about/AboutSection";
import SkillsSectionContainer from "../skills/SkillsSectionContainer";
import {Counter} from "../counter/Counter";

function App(): JSX.Element {
  // required when hosting the app on a subdirectory of a domain rather than top-level
  const projectPath =
    process.env.NODE_ENV === "production" ? "/webpack-react-template/" : "/";

  return (
    <Router basename={projectPath}>
      <div className="router-container">
        <div id="nocontent">
          {/* ignored by google */}
          <h1 className="invisible-but-outline-readable">
            Darga Webpack/React Template
          </h1>
        </div>
        <header>
          <NavigationBar />
        </header>

        <Counter />
        <Switch>
          <Route path="/hello" component={AboutSection} />
          <Route path="/world" component={SkillsSectionContainer} />

          <Redirect from="/" to="hello" />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

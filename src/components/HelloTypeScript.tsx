// import * as React from "react";
import React from "react";

interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class HelloTypeScript extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h2>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h2>
    );
  }
}

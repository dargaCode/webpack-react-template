import React from "react";

interface HelloProps {
  compiler: string;
  framework: string;
}

export default class HelloTypeScript extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h2>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h2>
    );
  }
}

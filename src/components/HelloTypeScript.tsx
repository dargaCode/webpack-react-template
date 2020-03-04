import React from "react";

interface Props {
  compiler: string;
  framework: string;
}

export default function HelloTypeScript(props: Props): JSX.Element {
  const { compiler, framework } = props;

  return (
    <h2 className="hello-typescript-message">
      Hello from {compiler} and {framework}!
    </h2>
  );
}

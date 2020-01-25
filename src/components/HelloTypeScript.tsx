import React from "react";

interface Props {
  compiler: string;
  framework: string;
}

export default function HelloTypeScript(props: Props) {
  const { compiler, framework } = props;

  return (
    <h2>
      Hello from {compiler} and {framework}!
    </h2>
  );
}

import React from "react";

interface HelloProps {
  compiler: string;
  framework: string;
}

export default function HelloTypeScript(props: HelloProps) {
  const { compiler, framework } = props;

  return (
    <h2>
      Hello from {compiler} and {framework}!
    </h2>
  );
}

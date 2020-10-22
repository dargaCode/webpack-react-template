import React from "react";
import HelloWorld from "./HelloWorld";

export default {
  title: "HelloWorld",
  component: HelloWorld
};

export const Basic = (): JSX.Element => <HelloWorld descriptor="Storybook" />;

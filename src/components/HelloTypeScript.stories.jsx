import React from "react";
import HelloTypeScript from "./HelloTypeScript";

export default {
  title: "HelloTypeScript",
  component: HelloTypeScript
};

export const Basic = () => (
  <HelloTypeScript compiler="storybook" framework="typescript" />
);

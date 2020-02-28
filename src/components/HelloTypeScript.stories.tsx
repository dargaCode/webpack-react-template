import React from "react";
import { Button } from "@storybook/react/demo";
import { action } from "@storybook/addon-actions";
import HelloTypeScript from "./HelloTypeScript";

export default {
  title: "HelloTypeScript",
  component: HelloTypeScript
};

export const Text = () => <HelloTypeScript compiler="hi" framework="loren" />;

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

Emoji.story = {
  name: "with emoji"
};

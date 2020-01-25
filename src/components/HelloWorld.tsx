import React from "react";
import { join } from "lodash";

interface Props {
  descriptor: string;
}

export default function HelloWorld(props: Props) {
  const { descriptor } = props;

  const message = join(["Hello", descriptor, "World!"], " ");

  return (
    <div>
      <div className="hello-world-message">{message}</div>
    </div>
  );
}

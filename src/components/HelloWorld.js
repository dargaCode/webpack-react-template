import React from "react";
import { join } from "lodash";

export default function HelloWorld() {
  const message = join(["Hello", "Webpack", "World!"], " ");

  return (
    <div>
      <div className="hello-world-message">{message}</div>
    </div>
  );
}

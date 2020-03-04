import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import HelloTypeScript from "./HelloTypeScript";

const props = {
  compiler: "jest",
  framework: "react"
};

describe("<HelloTypeScript/>", () => {
  it("should render the correct text", () => {
    const wrapper = shallow(
      <HelloTypeScript compiler={props.compiler} framework={props.framework} />
    );

    expect(wrapper.find(".hello-typescript-message").text()).toBe(
      `Hello from ${props.compiler} and ${props.framework}!`
    );
  });

  it("should match the snapshot", () => {
    const component = renderer.create(
      <HelloTypeScript compiler={props.compiler} framework={props.framework} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

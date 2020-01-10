import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import HelloWorld from "./HelloWorld";

describe("<HelloWorld/>", () => {
  it("should render the correct text", () => {
    const wrapper = shallow(<HelloWorld />);

    expect(wrapper.find(".hello-world-message").text()).toBe(
      "Hello Webpack World!"
    );
  });

  it("should match the snapshot", () => {
    const component = renderer.create(<HelloWorld />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

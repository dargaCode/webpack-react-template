import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./NavigationBar";

describe("<NavigationBar/>", () => {
  describe("render", () => {
    it("should include NavLinks for all 5 sections", () => {
      const wrapper = shallow(<NavigationBar />);

      const navLinks = wrapper.find("NavLink");

      expect(navLinks).toHaveLength(3);
      expect(navLinks.at(0).prop("to")).toBe("/home");
      expect(navLinks.at(1).prop("to")).toBe("/about");
      expect(navLinks.at(2).prop("to")).toBe("/other");
    });
  });

  it("should match the snapshot", () => {
    const component = renderer.create(
      <Router>
        <NavigationBar />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

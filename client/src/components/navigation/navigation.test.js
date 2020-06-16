import React from "react";
import { shallow } from "enzyme";
import Navigation from "./navigation";

describe("Navigation", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Navigation />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render three <NavLink />", () => {
    expect(wrapper.find("NavLink").length).toEqual(4);
  });
});

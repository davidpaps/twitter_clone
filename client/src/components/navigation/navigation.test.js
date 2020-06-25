import React from "react";
import { shallow } from "enzyme";
import Navigation from "./navigation";

describe("Navigation", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Navigation />)));

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("should render a <ul />", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should render a <li />", () => {
    expect(wrapper.find("li").length).toEqual(1);
  });
});

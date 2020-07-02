import React from "react";
import { shallow } from "enzyme";
import Home from "./home";

describe("Home", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Home />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <img />", () => {
    expect(wrapper.find("img").length).toEqual(4);
  });

  it("should render a <button/>", () => {
    expect(wrapper.find("button").length).toEqual(2);
  });

  it("should render a <Link />", () => {
    expect(wrapper.find("Link").length).toEqual(2);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

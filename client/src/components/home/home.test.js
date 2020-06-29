import React from "react";
import { shallow } from "enzyme";
import Home from "./home";

describe("Home", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Home />)));

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
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

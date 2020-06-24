import React from "react";
import { shallow } from "enzyme";
import Prompt from "./prompt";

describe("Prompt", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Prompt />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });
});

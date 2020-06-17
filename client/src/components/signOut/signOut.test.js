import React from "react";
import { shallow } from "enzyme";
import SignOut from "./signOut";

describe("SignOut", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<SignOut />)));

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render a <Link />", () => {
    expect(wrapper.find("Link").length).toEqual(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});

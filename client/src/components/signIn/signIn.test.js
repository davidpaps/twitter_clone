import React from "react";
import { shallow } from "enzyme";
import SignIn from "./signIn";

describe("Sign In", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<SignIn />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });
});

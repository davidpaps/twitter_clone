import React from "react";
import { shallow } from "enzyme";
import SignIn from "./signIn";

describe("Sign In", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});

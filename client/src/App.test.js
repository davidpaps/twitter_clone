import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import SignIn from "./components/signIn/signIn";

describe("App", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the SignIn component", () => {
    expect(wrapper.containsMatchingElement(<SignIn />)).toEqual(true);
  });
});

import React from "react";
import { shallow } from "enzyme";
import Home from "./home";
import AddTweet from "../addTweet/addTweet";

describe("Home", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Home />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the AddTweet component", () => {
    expect(wrapper.containsMatchingElement(<AddTweet />)).toEqual(true);
  });
});

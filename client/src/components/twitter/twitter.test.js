import React from "react";
import { shallow } from "enzyme";
import Home from "./twitter";
import AddTweet from "../addTweet/addTweet";
import ListTweets from "../listTweets/listTweets";

describe("Home", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Home />)));

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the AddTweet component", () => {
    expect(wrapper.containsMatchingElement(<AddTweet />)).toEqual(true);
  });

  it("should render the ListTweets component", () => {
    expect(wrapper.containsMatchingElement(<ListTweets />)).toEqual(true);
  });
});

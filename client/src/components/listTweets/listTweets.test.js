import React from "react";
import { shallow } from "enzyme";
import ListTweets from "./listTweets";
import EditTweet from "../editTweet/editTweet";

describe("List Tweet", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<ListTweets />)));

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render the EditTweet component", () => {
    expect(wrapper.containsMatchingElement(<EditTweet />)).toEqual(true);
  });
});

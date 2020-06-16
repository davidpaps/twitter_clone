import React from "react";
import { shallow } from "enzyme";
import ListTweets from "./listTweets";

describe("List Tweet", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<ListTweets />)));

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });
});

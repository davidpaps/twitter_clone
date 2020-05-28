import React from "react";
import { shallow } from "enzyme";
import AddTweet from "./addTweet";

describe("Add Tweet", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AddTweet />)));

  it("should render a <div />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });
});

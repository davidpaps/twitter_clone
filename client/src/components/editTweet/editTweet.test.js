import React from "react";
import { shallow } from "enzyme";
import EditTweet from "./editTweet";

describe("Edit Tweet", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<EditTweet tweet={""} />)));

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(4);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(6);
  });
});

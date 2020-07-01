import React from "react";
import { shallow } from "enzyme";
import EditTweet from "./editTweet";
import renderer from "react-test-renderer";

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

  it("should render correctly", () => {
    const tree = renderer.create(<EditTweet tweet={""} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

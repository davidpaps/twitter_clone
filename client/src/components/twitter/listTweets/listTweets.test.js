import React from "react";
import { shallow } from "enzyme";
import ListTweets from "./listTweets";
import renderer from "react-test-renderer";

describe("List Tweet", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<ListTweets />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render correctly", () => {
    const tree = renderer.create(<ListTweets />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

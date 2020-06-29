import React from "react";
import { shallow } from "enzyme";
import Twitter from "./twitter";
import renderer from "react-test-renderer";

describe("Home", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Twitter />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render correctly", () => {
    const tree = renderer.create(<Twitter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

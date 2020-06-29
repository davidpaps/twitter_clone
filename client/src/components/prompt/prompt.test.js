import React from "react";
import { shallow } from "enzyme";
import Prompt from "./prompt";
import renderer from "react-test-renderer";

describe("Prompt", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Prompt />)));

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render correctly", () => {
    const tree = renderer.create(<Prompt />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import Error from "./error";
import renderer from "react-test-renderer";

describe("Error", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Error />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <img />", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });

  it("should render correctly", () => {
    const tree = renderer.create(<Error />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

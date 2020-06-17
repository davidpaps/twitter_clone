import React from "react";
import { shallow } from "enzyme";
import Error from "./error";

describe("Error", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Error />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
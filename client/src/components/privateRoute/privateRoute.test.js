import React from "react";
import { shallow } from "enzyme";
import PrivateRoute from "./privateRoute";

describe("Private Route", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<PrivateRoute />)));

  it("should render a <Route />", () => {
    expect(wrapper.find("Route").length).toEqual(1);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

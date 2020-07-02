import React from "react";
import { shallow } from "enzyme";
import SignIn from "./signIn";

describe("Sign In", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<SignIn />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <img />", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("should render a <Input/>", () => {
    expect(wrapper.find("input").length).toEqual(2);
  });

  it("should render a <button/>", () => {
    expect(wrapper.find("button").length).toEqual(2);
  });

  it("should render a <Link />", () => {
    expect(wrapper.find("Link").length).toEqual(1);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

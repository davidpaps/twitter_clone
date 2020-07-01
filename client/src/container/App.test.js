import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Navigation from "../components/navigation/navigation";
import renderer from "react-test-renderer";

describe("App", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Navigation component", () => {
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true);
  });

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });

  it("should render a <BrowserRouter />", () => {
    expect(wrapper.find("BrowserRouter").length).toEqual(1);
  });

  it("should render a <Switch />", () => {
    expect(wrapper.find("Switch").length).toEqual(1);
  });

  it("should render a <Route />", () => {
    expect(wrapper.find("Route").length).toEqual(5);
  });

  it("should rendercorrectly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

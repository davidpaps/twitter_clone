import React from "react";
import { shallow } from "enzyme";
import EditTweet from "./editTweet";

describe("Edit Tweet", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <EditTweet tweet={{ tweet_id: 1, description: "tweet" }} />
      ))
  );

  it("should render a <Fragment />", () => {
    expect(wrapper.find("Fragment").length).toEqual(1);
  });
});

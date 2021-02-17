import React from "react";
import { shallow, render } from "enzyme";
import OurStory from "./our-story";

describe("OurStory component", () => {
  it("should render OurStory component", () => {
    const component = shallow(<OurStory />);
    expect(component).toMatchSnapshot();
  });
});

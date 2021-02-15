import React from "react";
import { shallow } from "enzyme";
import OurStory from "./our-story";

describe("OurStory component", () => {
  it("should render OurStory component", () => {
    // expect(1).toBe(1);
    const component = shallow(<OurStory />);
    const wrapper = component.find(".ourStory");
    // console.log(component.debug());
    expect(wrapper.length).toBe(1);
  });
});

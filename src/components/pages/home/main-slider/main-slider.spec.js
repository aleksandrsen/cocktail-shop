import React from "react";
import { shallow } from "enzyme";
import MainSlider from "./main-slider";
import { findByTestAttr } from "../../../../utils/testsUtils";

const setUp = () => shallow(<MainSlider />);

describe("Should render MainSlider component without errors", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render component without errors", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render MainSlide wrapper", () => {
    const wrapper = findByTestAttr(component, "mainSlider");
    expect(wrapper.length).toBe(1);
  });
});

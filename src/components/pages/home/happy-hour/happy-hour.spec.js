import React from "react";
import { shallow } from "enzyme";
import HappyHour from "./happy-hour";
import { findByTestAttr } from "../../../../utils/testsUtils";

const setUp = () => shallow(<HappyHour />);

describe("Should render HappyHour component without errors", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render component without errors", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render HappyHour wrapper", () => {
    const wrapper = findByTestAttr(component, "happyHour");
    expect(wrapper.length).toBe(1);
  });
});

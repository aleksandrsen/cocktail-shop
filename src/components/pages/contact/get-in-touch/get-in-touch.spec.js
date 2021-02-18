import React from "react";
import { shallow } from "enzyme";
import GetInTouch from "./get-in-touch";
import { findByTestAttr } from "../../../../utils/testsUtils";

const setUp = () => shallow(<GetInTouch />);

describe("Should render GetInTouch component without errors", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render component without errors", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render GetInTouch wrapper", () => {
    const wrapper = findByTestAttr(component, "getInTouch");
    expect(wrapper.length).toBe(1);
  });
});

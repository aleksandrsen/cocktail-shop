import React from "react";
import { shallow } from "enzyme";
import RippleButton from "./ripple-button";
import { findByTestAttr } from "../../../utils/testsUtils";

const setUp = (props = {}) =>
  shallow(<RippleButton {...props}>RippleButton</RippleButton>);

describe("RippleButton", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render button", () => {
    const button = findByTestAttr(component, "rippleButton");
    expect(button).toHaveLength(1);
  });

  it("Should render right text inside button", () => {
    const text = "Submit";
    const component = shallow(<RippleButton>{text}</RippleButton>);
    const button = findByTestAttr(component, "rippleButton");
    expect(button.text()).toBe(text);
  });

  it("Should call onClick method", () => {
    const mockCallBack = jest.fn();
    const component = shallow(
      <RippleButton onClick={mockCallBack}>Click</RippleButton>
    );
    const button = component.find("button");
    console.log(button.debug())
    button.simulate("click", { currentTarget: button });
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});

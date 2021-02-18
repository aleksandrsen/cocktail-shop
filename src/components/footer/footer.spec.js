import React from "react";
import Footer from "./footer";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils/testsUtils";

const setUp = () => shallow(<Footer />);

describe("Should render Footer component without errors", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render Footer component", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render Footer component wrapper", () => {
    const wrapper = findByTestAttr(component, "mainFooter");
    expect(wrapper.length).toBe(1);
  });
});

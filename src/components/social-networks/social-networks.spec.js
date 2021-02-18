import React from "react";
import { shallow } from "enzyme";
import SocialNetworks from "./social-networks";
import { findByTestAttr } from "../../utils/testsUtils";

const setUp = () => shallow(<SocialNetworks />);

describe("Should render SocialNetworks component without errors", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render SocialNetworks component", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render SocialNetworks component wrapper", () => {
    const wrapper = findByTestAttr(component, "socialNetworks");
    expect(wrapper.length).toBe(1);
  });

  it("Should render SocialNetworks without Facebook icon", () => {
    const component = shallow(<SocialNetworks exclude="Facebook" />);
    expect(component).toMatchSnapshot();
  });
});

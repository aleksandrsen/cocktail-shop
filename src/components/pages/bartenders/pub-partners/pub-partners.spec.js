import React from "react";
import { shallow } from "enzyme";
import PubPartners from "./pub-partners";
import { findByTestAttr } from "../../../../utils/testsUtils";

const setUp = () => shallow(<PubPartners />);

describe("Should render PubPartners component without errors", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render component without errors", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render PubPartners wrapper", () => {
    const wrapper = findByTestAttr(component, "pubPartners");
    expect(wrapper.length).toBe(1);
  });
});

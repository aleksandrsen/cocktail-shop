import React from "react";
import { shallow } from "enzyme";
import AboutUs from "./about-us";
import {findByTestAttr} from "../../../../utils/testsUtils";

const setUp = () => shallow(<AboutUs/>);

describe("Should render AboutUs component without errors", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it("Should render component without errors", () => {
        expect(component).toMatchSnapshot();
    });

    it("Should render AboutUs wrapper", () => {
        const wrapper = findByTestAttr(component, "about");
        expect(wrapper.length).toBe(1);
    });
});
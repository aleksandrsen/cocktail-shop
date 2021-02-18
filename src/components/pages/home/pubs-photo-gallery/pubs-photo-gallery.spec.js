import React from "react";
import { shallow } from "enzyme";
import PubsPhotoGallery from "./pubs-photo-gallery";
import {findByTestAttr, testStore} from "../../../../utils/testsUtils";

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    return shallow(<PubsPhotoGallery store={store} />)
        .childAt(0)
        .dive();
};

describe("Should render PubsPhotoGallery component without errors", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it("Should render component without errors", () => {
        expect(component).toMatchSnapshot();
    });

    it("Should render PubsPhotoGallery wrapper", () => {
        const wrapper = findByTestAttr(component, "pubGallery");
        expect(wrapper.length).toBe(1);
    });
});

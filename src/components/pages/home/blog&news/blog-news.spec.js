import React from "react";
import { shallow } from "enzyme";
import BlogNews from "./blog-news";
import { testStore, findByTestAttr } from "../../../../utils/testsUtils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  return shallow(<BlogNews store={store} />)
    .childAt(0)
    .dive();
};

describe("BlogNews component", () => {
  let wrapper;
  const initialState = {
    blogPosts: [
      {
        authorFullName: "Author 1",
        date: "2019-11-25T07:00",
        dislikes: 1,
        id: 2,
        likes: 3,
        title: "title 1",
        content: "description 1",
      },
      {
        authorFullName: "Author 2",
        date: "2019-11-25T07:00",
        dislikes: 1,
        id: 2,
        likes: 3,
        title: "title 3",
        content: "description 3",
      },
    ],
  };

  beforeEach(() => {
    wrapper = setUp(initialState);
  });

  it("Should render BlogNews component", () => {
    const component = findByTestAttr(wrapper, "blogNewsHome");
    expect(component.length).toBe(1);
  });
});

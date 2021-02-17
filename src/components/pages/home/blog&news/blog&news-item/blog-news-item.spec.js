import React from "react";
import { shallow } from "enzyme";
import BlogNewsItem from "./blog-news-item";
import { findByTestAttr } from "../../../../../utils/testsUtils";
import { cutTextContent, formatDate } from "../../../../../utils";

const setUp = (props = {}) => shallow(<BlogNewsItem post={props} />);

describe("BlogNewsItem component", () => {
  describe("Should render component without props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should render BlogNewsItem component without errors", () => {
      const wrapper = findByTestAttr(component, "blogNewsItem");
      expect(wrapper.length).toBe(1);
    });

    it("Have not props", () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe("Should render component with props", () => {
    const props = {
      authorFullName: "Author",
      date: "2019-11-25T07:00",
      dislikes: 1,
      id: 2,
      likes: 3,
      title: "title",
      content: "description",
    };

    it("Have props", () => {
      const component = setUp(props);
      expect(component).toMatchSnapshot();
    });

    it("Should render correct long day number", () => {
      const component = setUp(props);
      const dayNum = findByTestAttr(component, "blogNewsItem__dateDay");
      expect(dayNum.text()).toBe(formatDate(props.date, { day: "numeric" }));
    });

    it("Should render correct short day number", () => {
      const props_ = { ...props, date: "2019-11-07T07:00" };
      const component = shallow(<BlogNewsItem post={props_} />);
      const dayNum = findByTestAttr(component, "blogNewsItem__dateDay");
      expect(dayNum.text()).toBe(
        0 + formatDate(props_.date, { day: "numeric" })
      );
    });

    it("Should render full text content", () => {
      const props_ = { ...props, content: "Short text content" };
      const component = setUp(props_);
      const textContent = findByTestAttr(component, "blogNewsItemTextContent");
      expect(textContent.text()).toBe(props_.content);
    });

    it("Should render cut text content", () => {
      const props_ = {
        ...props,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa explicabo maiores placeat rerum. Ad asperiores eos esse, harum, inventore iusto laborum necessitatibus nesciunt porro quae quas repellat tenetur, voluptate!",
      };
      const component = setUp(props_);
      const textContent = findByTestAttr(component, "blogNewsItemTextContent");
      expect(textContent.text()).toBe(cutTextContent(props_.content, 140));
    });
  });
});

import React from "react";
import Section from "../common-components/section";
import Container from "../common-components/container";
import BlogPostsContainer from "../blog-posts-container";
import AsideEventPostContainer from "../aside-event-posts-container";
import {Row, Col} from "antd";

function BlogPage(props) {

    return (
        <Section>
            <Container>
                <Row type="flex" justify="space-between">
                    <Col span={17}>
                        <BlogPostsContainer/>
                    </Col>
                    <Col span={6}>
                        <AsideEventPostContainer/>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default BlogPage;
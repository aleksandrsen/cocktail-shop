import React from "react";
import Section from "../common-components/section";
import Container from "../common-components/container";
import BlogPostsContainer from "../blog-posts-container";
import AsideEventPostsContainer from "../aside-events-posts-container";
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
                        <AsideEventPostsContainer/>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default BlogPage;
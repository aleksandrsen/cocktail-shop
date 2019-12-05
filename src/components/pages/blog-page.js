import React from "react";
// Components
import Section from "../common-components/section";
import Container from "../common-components/container";
import BlogPostsList from "../blog-posts-list";
import Aside from "../aside";
import {Row, Col} from "antd";

function BlogPage(props) {

    return (
        <Section>
            <Container>
                <Row type="flex" justify="space-between">
                    <Col span={17}>
                        <BlogPostsList/>
                    </Col>
                    <Col span={6}>
                        <Aside/>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default BlogPage;
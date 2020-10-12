import React from "react";
import Section from "../common-components/section";
import Container from "../common-components/container";
import AsideEventPostsContainer from "../aside";
import {Row, Col} from "antd";
import BlogDetails from "../blog-details";

function BlogDetailsPage(props) {
    let {blogPostId} = props;

    return (
        <Section>
            <Container>
                <Row type="flex" justify="space-between">
                    <Col span={17}>
                        <BlogDetails blogPostId={blogPostId}/>
                    </Col>
                    <Col span={6}>
                        <AsideEventPostsContainer/>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default BlogDetailsPage;
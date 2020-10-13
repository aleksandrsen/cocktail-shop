import React from "react";
// Components
import Aside from "../../aside";
import BlogPostsList from "./blog-posts-list";
import {Row, Col} from "antd";

function BlogPage(props) {

    return (
        <section className="default-section">
            <div className="container">
                <Row type="flex" justify="space-between">
                    <Col span={17}>
                        <BlogPostsList/>
                    </Col>
                    <Col span={6}>
                        <Aside/>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default BlogPage;
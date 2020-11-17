import React from "react";
// import AsideEventPostsContainer from "../../aside";
import {Row, Col} from "antd";
import BlogDetails from "../blog-details";

function BlogDetailsPage(props) {
    let {blogPostId} = props;

    return (
        <section className="default-section">
            <div className="container">
                <Row type="flex" justify="space-between">
                    <Col span={17}>
                        <BlogDetails blogPostId={blogPostId}/>
                    </Col>
                    <Col span={6}>
                        {/*<AsideEventPostsContainer/>*/}
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default BlogDetailsPage;
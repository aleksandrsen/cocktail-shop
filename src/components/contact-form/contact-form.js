import React, {useState} from 'react';
import './contact-form.scss';
import {connect} from "react-redux";
// Actions
import {addReviewForBlogPost} from "../../actions";
// Components
import {Row, Col, Form, Input} from 'antd';
import DefaultButton from "../common-components/default-button";

function ContactForm(props) {
    let {btnText, btnPos, reviewGoal, addReviewForBlogPost} = props;
    let {goal, id} = reviewGoal;

    let [fullName, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');
    const {TextArea} = Input;

    return (
        <Form onSubmit={handleSubmit} className={`contact-form ${btnPos ? btnPos : ''}`}>
            <Row type="flex" justify="space-between" align="middle">
                <Col span={7}>
                    <Input
                        placeholder="Full name"
                        size="large"
                        value={fullName}
                        onChange={(e => setName(e.target.value))}/>
                </Col>
                <Col span={7}>
                    <Input placeholder="Email"
                           size="large"
                           value={email}
                           onChange={e => setEmail(e.target.value)}/>
                </Col>
                <Col span={7}>
                    <Input
                        placeholder="Subject"
                        size="large"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <TextArea rows={6}
                              placeholder="Message"
                              value={message}
                              onChange={e => setMessage(e.target.value)}/>
                </Col>
            </Row>
            <DefaultButton type="submit">{btnText ? btnText : "Submit"}</DefaultButton>
        </Form>
    );

    function handleSubmit(e) {
        e.preventDefault();
        if (goal === 'blog-post') {
            addReviewForBlogPost(id, fullName, email, message);
        }
    }
}

export default connect(null, {addReviewForBlogPost})(ContactForm);
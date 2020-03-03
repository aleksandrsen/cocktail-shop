import React from 'react';
import './talk-to-bartender-form.scss';
// Components
import {Field, reduxForm} from "redux-form";
import {Row, Col, Form, Input} from 'antd';
import DefaultButton from "../common-components/default-button";

const renderField = (props) => {
    const {input, meta: {touched, error}, label} = props;
    return (
        <div className='formControl'>
            <label htmlFor="some">{label}</label>
            <input type="text" {...input} className={touched && error && 'error'}/>
            {touched && error && <span>{error}</span>}
        </div>
    )
};

let TalkToBartenderForm = ({btnText, btnPos, handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit} className={`contact-form ${btnPos ? btnPos : ''}`}>
            <Row type="flex" justify="space-between" align="middle">
                <Col span={11}>
                    <Field component={renderField} name="full_name" label='Full name'/>
                </Col>
                <Col span={11}>
                    <Field component={renderField} name="email" label='Email'/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Field component={renderField} name="message" label='message'/>
                </Col>
            </Row>
            <DefaultButton type="submit">Send message</DefaultButton>
        </Form>
    );
};

TalkToBartenderForm = reduxForm({
    form: 'talkToBartender',
})(TalkToBartenderForm);

export default TalkToBartenderForm;
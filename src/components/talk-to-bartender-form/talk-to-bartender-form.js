import React from 'react';
import './talk-to-bartender-form.scss';
// Components
import {Field, reduxForm} from "redux-form";
import DefaultButton from "../common-components/default-button";

const renderField = (props) => {
    const {input, meta: {touched, error}, label} = props;
    return (
        <div className='formControl'>
            <label htmlFor="some">{label}</label>
            <input type="text" {...input} data-state='valid'/>
            {touched && error && <span>{error}</span>}
        </div>
    )
};

let TalkToBartenderForm = ({btnText, btnPos, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={`talk-to-bartender-form ${btnPos ? btnPos : ''}`}>
            <div>
                <Field component={renderField} name="full_name" label='Full name'/>
                <Field component={renderField} name="email" label='Email'/>
            </div>
            <div>
                <Field component={renderField} name="message" label='Message'/>
            </div>
            <DefaultButton type="submit">Send message</DefaultButton>
        </form>
    );
};

TalkToBartenderForm = reduxForm({
    form: 'talkToBartender',
})(TalkToBartenderForm);

export default TalkToBartenderForm;
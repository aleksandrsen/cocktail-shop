import React from 'react';
import './blot-posts-review-form.scss';
import validate from "./validate";
// Components
import {Field, reduxForm} from "redux-form";

const renderField = ({input, meta: {touched, error, valid}, label, placeholder}) => {

    const condition = touched && error ? 'invalid' : valid ? 'valid' : '';
    return (
        <div className='formControl'>
            <label htmlFor="some">{label}</label>
            <input type="text" {...input} data-state={condition} placeholder={placeholder}/>
            {touched && error && <span className='error'>{error}</span>}
        </div>
    )
};

const renderFieldTextarea = ({input, meta: {touched, error, valid}, label, placeholder}) => {
    const condition = touched && error ? 'invalid' : valid ? 'valid' : '';
    return (
        <div className='formControl'>
            <label htmlFor="some">{label}</label>
            <textarea type="text" {...input} data-state={condition} placeholder={placeholder}/>
            {touched && error && <span className='error'>{error}</span>}
        </div>
    )
};

let BlogPostsReviewForm = ({btnText, btnPos, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className='blog-posts-reviews-form' noValidate>
            <Field component={renderField} name="name" label='Full name' placeholder="Enter full name"/>
            <Field component={renderField} name="email" label='Email' placeholder="Enter email"/>
            <Field component={renderFieldTextarea} name="message" label='Message' placeholder="Type your message"/>
            <button className="default-button" type="submit">Send message</button>
        </form>
    );
};

BlogPostsReviewForm = reduxForm({
    form: 'talkToBartender',
    validate
})(BlogPostsReviewForm);

export default BlogPostsReviewForm;

// disable button --------------------------------------------------------------------------
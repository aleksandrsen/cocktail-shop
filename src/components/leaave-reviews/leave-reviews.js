import React, {useState} from 'react';
import './leave-reviews.scss';
import DefaultButton from "../common-components/default-button";
import {CSSTransition} from 'react-transition-group';
// Components
import ContactForm from "../contact-form";

function LeaveReviews(props) {
    let {blogPostId} = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="leave-reviews">
            <div className="leave-reviews-block">
                <h3 className="leave-reviews-title">Leave your review</h3>
                <DefaultButton
                    onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close form" : "Write review"}
                </DefaultButton>
            </div>
            {isOpen ? <ContactForm reviewGoal={{id: blogPostId, goal: 'blog-post'}} btnPos="right"/> : ''}
        </div>
    )
}

export default LeaveReviews;
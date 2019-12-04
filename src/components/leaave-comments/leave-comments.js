import React, {useState} from 'react';
import './leave-comments.scss';
// Components
import ContactForm from "../contact-form";
import DefaultButton from "../common-components/default-button";

function LeaveComments(props) {
    const [isOpen, setIsOpen] = useState(false);

    const btn = <DefaultButton
        onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close form" : "Write review"}</DefaultButton>;

    return (
        <div className="leave-comments">
            <div className="leave-comments-block">
                <h3 className="leave-comments-title">Leave your review</h3>
                {btn}
            </div>
            <div className={`form-wrapper ${isOpen ? "" : "hide"}`}>
                <ContactForm btnPos="right" btnText="Send review"/>
            </div>
        </div>
    );
}

export default LeaveComments;
import React, {useState} from 'react';
import './leave-reviews.scss';
import { Transition } from 'react-transition-group';
// Components
import ContactForm from "../contact-form";
import DefaultButton from "../common-components/default-button";

function LeaveReviews(props) {
    const [isOpen, setIsOpen] = useState(false);
    let {id} = props;

    const btn = <DefaultButton
        onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close form" : "Write review"}</DefaultButton>;


    const duration = 300;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
        padding: '120px'
    };
    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    const Fade = ({ in: inProp }) => (
        <Transition in={inProp} timeout={duration}>
            {state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    I'm a fade Transition!
                </div>
            )}
        </Transition>
    );

    return (
        <div className="leave-reviews">
            <div className="leave-comments-block">
                <h3 className="leave-comments-title">Leave your review</h3>
                {btn}
            </div>
            <Transition in={isOpen} timeout={duration}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        I'm a fade Transition!
                    </div>
                )}
            </Transition>
        </div>
    );
}

export default LeaveReviews;



{/*<div className={`form-wrapper`}>*/}
{/*    <ContactForm btnPos="right" btnText="Send review" reviewGoal={{goal: "blog-post", id: id}}/>*/}
{/*</div>*/}
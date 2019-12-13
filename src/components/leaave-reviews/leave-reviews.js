import React, {useState} from 'react';
import './leave-reviews.scss';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
// Components
import ContactForm from "../contact-form";
import DefaultButton from "../common-components/default-button";

function LeaveReviews(props) {
    const [isOpen, setIsOpen] = useState(false);
    let {id} = props;

    // const btn = <DefaultButton
    //     onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close form" : "Write review"}</DefaultButton>;

    const btn = <DefaultButton
        onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close form" : "Write review"}</DefaultButton>;

    return (
        <div className="leave-reviews">
            <div className="leave-comments-block">
                <h3 className="leave-comments-title">Leave your review</h3>
                {btn}
            </div>


            <TransitionGroup className="todo-list">
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="item"
                >
                <div>
                    {isOpen ? (
                        <div className={`form-wrapper`}>
                            <ContactForm btnPos="right" btnText="Send review" reviewGoal={{goal: "blog-post", id: id}}/>
                        </div>
                    ) : '<div>hello</div>'}

                </div>

                </CSSTransition>
            </TransitionGroup>


            {/*<CSSTransition*/}
            {/*    in={isOpen}*/}
            {/*    timeout={300}*/}
            {/*    classNames="alert"*/}
            {/*    unmountOnExit*/}
            {/*    onEnter={() => setIsOpen(true)}*/}
            {/*    onExited={() => setIsOpen(false)}*/}
            {/*>*/}
            {/*    <div className={`form-wrapper`}>*/}
            {/*        <ContactForm btnPos="right" btnText="Send review" reviewGoal={{goal: "blog-post", id: id}}/>*/}
            {/*    </div>*/}
            {/*</CSSTransition>*/}


        </div>
    );
}

export default LeaveReviews;
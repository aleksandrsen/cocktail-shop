import React, {useState} from 'react';
import './join-mailing-list.scss';
// Components
import DefaultButton from "../common-components/default-button";

function JoinMailingList(props) {
    let [email, changeEmail] = useState('');

    return (
        <form className='join-mailing-list'>
            <label htmlFor="join-list">Join mailing list</label>
            <input onChange={(e) => changeEmail(email = e.target.value)}
                   type="email"
                   value={email}
                   id="join-list"/>
            <DefaultButton>Sign up</DefaultButton>
        </form>
    );
}

export default JoinMailingList;

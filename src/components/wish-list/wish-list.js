import React from 'react';
import './wish-list.scss';
import {connect} from "react-redux";
import {wishListAmountSelector} from "../../selectors";

function WishList(props) {
    let {amount} = props;

    return (
        <a href="#" className="wish-list">
            <i className="small material-icons">favorite_border</i>
            {amount !== 0 && <span className="count">{amount}</span>}
        </a>
    );
}

export default connect(state => ({
    amount: wishListAmountSelector(state)
}))(WishList);

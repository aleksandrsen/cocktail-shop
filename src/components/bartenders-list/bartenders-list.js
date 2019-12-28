import React, {useEffect} from 'react';
import './bartenders-list.scss';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
// Selectors
import {
    bartendersLoadedSelector,
    bartendersLoadingSelector,
    bartendersSelector
} from "../../selectors";
// Actions
import {loadBartenders} from "../../actions";
// Components
import {Row} from 'antd';
import BartenderItem from "../bartender-item";
import Spinner from "../spinner";

function BartendersList(props) {
    let {history, isLoading, isLoaded, loadBartenders, bartenders} = props;

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadBartenders();
        }
    });

    if (!isLoading && isLoaded) {

        return (
            <Row gutter={32}>
                {
                    bartenders.map(bartender => {
                        return <BartenderItem
                            key={bartender.id}
                            bartender={bartender}
                            bartenderDetails={() => {
                                let {id} = bartender;
                                history.push(id)
                            }
                            }
                        />
                    })
                }
            </Row>
        );
    }
    return <Spinner/>
}

export default connect((state => ({
    isLoading: bartendersLoadingSelector(state),
    isLoaded: bartendersLoadedSelector(state),
    bartenders: bartendersSelector(state)
})), {loadBartenders})(withRouter(BartendersList));
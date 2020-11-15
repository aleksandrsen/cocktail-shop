import React from 'react';
import './spinner.css';

function SmallSpinner(props) {
    return (
        <div className="lds-css ng-scope smallSpinner">
            <div className="lds-spin">
                <div>
                    <div/>
                </div>
                <div>
                    <div/>
                </div>
                <div>
                    <div/>
                </div>
                <div>
                    <div/>
                </div>
                <div>
                    <div/>
                </div>
                <div>
                    <div/>
                </div>
                <div>
                    <div/>
                </div>
                <div>
                    <div/>
                </div>
            </div>
        </div>
    );
}

export default SmallSpinner;
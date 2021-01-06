import React from 'react';
import './spinner.scss';

function SmallSpinner() {
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
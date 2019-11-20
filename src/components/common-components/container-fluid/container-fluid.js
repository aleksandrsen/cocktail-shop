import React from 'react';
import './container-fluid.scss';

function ContainerFluid(props) {

    return (
        <div className="container-fluid">
            {props.children}
        </div>
    );
}

export default ContainerFluid;

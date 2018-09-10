import React from 'react';

const Column = (props) => {
    return (
        <div className={props.col}>
            {props.children}
        </div>
    );
};

export default Column;

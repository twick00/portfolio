import React from 'react';

const Paragraph = (props) => {
    return (
        <React.Fragment>
            <p className="w-90 sm-w-100 m-25px-b">{props.children}</p>
        </React.Fragment>
    );
};

export default Paragraph;

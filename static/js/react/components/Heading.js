import React from 'react';

export const Heading = (props) => {
    return (
        <React.Fragment>
            <h5 className="color-extra-dark-gray font-w-700 font-alt text-uppercase font-alt m-0px m-10px-b">{props.children}</h5>
        </React.Fragment>
    );
};

export const SubHeading = (props) => {
    return (
        <React.Fragment>
            <p className="w-90 sm-w-100 font-alt font-w-600 color-extra-dark-gray m-25px-t">{props.children}</p>
        </React.Fragment>
    )
}

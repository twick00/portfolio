import React from 'react';

const Image = (props) => {
    return (
        <div className="col-12 col-md-6 sm-m-30px-t">
            <img src={props.src} title="" alt=""/>
        </div>
    );
};

export default Image;

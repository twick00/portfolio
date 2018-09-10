import React from 'react';

const Contact = (props) => {
    return (
        <div className="col-12 col-sm-3 col-md-3 col-lg-3 md-m-15px-tb">
            <i className={`${props.icon} color-theme font-35 m-15px-b display-inline-block`}/>
            <h6 className="font-14 font-alt font-w-600 color-extra-dark-gray m-0px m-5px-b">{props.title}</h6>
            <p className="m-0px">{props.body}</p>
        </div>
    );
};

export default Contact;

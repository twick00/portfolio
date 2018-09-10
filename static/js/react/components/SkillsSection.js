import React from 'react';

const SkillsSection = (props) => {
    return (
        <React.Fragment>

            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-12 col-md-6">
                        <div className="p-50px-lr p-70px-tb md-p-30px-lr md-p-40px-tb sm-p-0px-lr">
                            <p className="font-15 font-alt font-w-600 color-white letter-spacing-2 m-15px-b">{props.heading}</p>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SkillsSection;

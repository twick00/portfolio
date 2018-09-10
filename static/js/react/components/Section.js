import React from 'react';

const Section = (props) => {
    return (
        <section id={props.id} className={"section " + props.classes} style={props.style}>
            {props.overlay && <div className="section-overlay-in section-overlay-r section-overlay-w-50 sm-section-overlay-w-100 dark-bg">

            </div>}
            <div className="container">

                        {props.children}
            </div>
        </section>
    );
};

export default Section;

import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <div className="dark-bg">
                <div className="container">
                    <div className="text-center p-40px-tb border-b border-extra-dark-gray">
                        <span className="font-11 font-w-800 font-alt letter-spacing-3 text-italic text-uppercase color-white">{props.children}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

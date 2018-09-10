import React from 'react';

const Navbar = (props) => {
    return (
        <header className="header header-transparent-01">
            <div className="container">
                <nav className="navbar navbar-expand-lg menu-hover-text">
                    {props.children}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

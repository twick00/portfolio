import React from 'react';

const NavbarBrand = (props) => {
    return (
        <React.Fragment>
            <a className="navbar-brand font-alt" href={props.href || "#"} id="type-itheading">
                {props.children}
            </a>
        </React.Fragment>
    );
};

export default NavbarBrand;

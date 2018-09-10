import React from 'react';

export const NavbarLink = (props) => {
    return (
        <div id="navbarwickline" className="collapse navbar-collapse top-menu">
            <ul className="navbar-nav ml-auto">
                {props.children}
            </ul>
        </div>
    );
};

export const Link = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.href}>{props.text}</a>
        </li>
    )
}

import React, {Component} from 'react';
import Navbar from "../components/Navbar.js";
import {NavbarLink, Link} from "../components/NavbarLink.js";
import NavbarBrand from "../components/NavbarBrand.js";
import Banner from "../components/Banner";

class PortfolioHomePage extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar>
                <NavbarBrand>
                    ITS ME, DEVELOPER
                </NavbarBrand>
                <NavbarLink>
                    <Link href={"#home"} text={"Home"}/>
                    <Link href={"#about"} text={"About Me"}/>
                </NavbarLink>
            </Navbar>
                <Banner>
                    I AM TYLER
                </Banner>
            </React.Fragment>
        );
    }
}

export default PortfolioHomePage;
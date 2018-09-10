import React, {Component} from 'react';
import Navbar from "../components/Navbar.js";
import {NavbarLink, Link} from "../components/NavbarLink.js";
import NavbarBrand from "../components/NavbarBrand.js";
import Banner from "../components/Banner";
import Section from "../components/Section";
import {Heading, SubHeading} from "../components/Heading";
import Paragraph from "../components/Paragraph";
import image from "./../../../../static/img/23622324_10155156305053932_4155289213839659296_n.jpg"
import Image from "../components/Image";
import Column from "../components/Column";
import SkillsSection from "../components/SkillsSection"
import Skills from "../components/Skills";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TypeItComponent from "../components/TypeItComponent";
import TypeIt from "typeit";

class PortfolioHomePage extends Component {
    constructor() {
        super()
        console.log(image)
    }
    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Navbar>
                    <NavbarBrand>
                        Wickline.io
                    </NavbarBrand>
                    <NavbarLink>
                        <Link href={"#home"}>Home</Link>
                        <Link href={"#about"}>About Me</Link>
                        <Link href={"#skills"}>Skills</Link>
                        <Link href={"#contact"}>Contact Me</Link>
                    </NavbarLink>
                </Navbar>
                <Banner>
                    <TypeItComponent strings={"I'M TYLER"} startDelay={500} cursor={false} breaklines={false} speed={120}/>
                    <h6><TypeItComponent strings={["React Ninja", "Cool Guy", "Web Developer"]} breakLines={false} startDelete={true} nextStringDelay={2000} startDelay={3000} breaklines={false} speed={80} autoStart={false}/></h6>
                </Banner>
                <Section id={"about"}>
                    <div className="row align-items-center">
                    <Column col={"col-12 col-md-6"}>
                        <Heading>About Me</Heading>
                        <SubHeading>I build and design fantastic websites and I love it!</SubHeading>
                        <Paragraph>My passion ever since I was young has always been to build things.
                            Its been a long road of getting my hands dirty but I appreciate every experience I've had
                            getting here.
                        </Paragraph>
                        <Paragraph>
                            When not programming, I like to spend time outside with friends
                            and family hiking and kayaking. I also volunteer every year for the <a
                            href="https://www.namiwa.org/index.php/namiwalks">National Alliance on Mental
                            Illness</a>, which my brother-in-law is a spokesperson for!
                            <small><a href="https://www.namiwa.org/index.php/donate">Please donate</a></small>
                        </Paragraph>
                        <a href="https://drive.google.com/file/d/14bnO4mfoM3R6aJHeI_LLv4UiIVZaRaq7/view?usp=sharing"
                           target="_blank" className="m-btn" download>download resume</a>
                    </Column>
                    <Image src={image}/>
                    </div>
                </Section>
                <Section id={"skills"} overlay={"dark"} classes={"bg-cover bg-fixed section-overlay bg-no-repeat bg-center-center"} style={{backgroundImage: "url(https://images.pexels.com/photos/1166657/pexels-photo-1166657.jpeg?cs=srgb&dl=book-bookcase-books-1166657.jpg&fm=jpg)"}}>
                    <SkillsSection heading={"Some Of My Skills"} >
                        <Skills>
                            <Skill percent={"75%"}>HTML</Skill>
                            <Skill percent={"55%"}>CSS</Skill>
                            <Skill percent={"75%"}>JavaScript/ES6+</Skill>
                            <Skill percent={"60%"}>Java</Skill>
                            <Skill percent={"80%"}>React</Skill>
                        </Skills>
                    </SkillsSection>
                </Section>
                <Section id={"contact"}>
                    <div className="row align-items-center text-center">
                        <Contact icon={"ti-location-pin"} title={"Contact Address"} body={"Marysville, WA 98271"}/>
                        <Contact icon={"ti-linkedin"} title={"My LinkedIn"} body={<a href="https://www.linkedin.com/in/tyler-wickline/">/in/tyler-wickline/</a>}/>
                        <Contact icon={"ti-github"} title={"My Github"} body={<a href="https://github.com/twick00">https://github.com/twick00</a>}/>
                        <Contact icon={"ti-email"} title={"My Email"} body={<a href="mailto:me@tylerwickline.com">me@tylerwickline.com</a>}/>
                    </div>
                </Section>
                <Footer>
                    Both wickline.io&trade; and tylerwickline.com are owned and operated by Tyler Wickline
                </Footer>
            </React.Fragment>
        );
    }
}

export default PortfolioHomePage;

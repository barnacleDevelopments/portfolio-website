import React, { FunctionComponent } from "react";
import NavBtn from "./NavBtn"
import NavLogo from "./NavLogo"
import styled from "@emotion/styled";

const Nav = styled("nav")`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    height: 100%;
    z-index: 10000;
    width: 60px;
    background-color: #314455;
    position: absolute;
    ul {
        width: 100%;     
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;
        i {
            display: flex;
            justify-content: center;
        }
    }

    li:hover {
        color: #f5f5f5;
        font-size: .8em;
        font-weight: 500;
        text-transform: lowercase;
        opacity: 1;
    }

    li:hover img {
        opacity: .5;
    }
    

    li:hover > a > i {
        color: #f5f5f570;
        font-size: 18px;
    }

    img {
        width: 100%;
        object-fit: contain;
    }

    a {
        text-decoration: none;
        color: #f5f5f5;
    }
`

interface SideNavData {
    shrinkIntro(): void,
    expandIntro(): void 
}

const SideNav:FunctionComponent<SideNavData> = ({shrinkIntro, expandIntro}) => {
    return (
        <Nav className="side-nav">
            <ul className="nav-list">
                <NavLogo iconSrc="./img/logo_3.png" 
                        iconRef="https://www.instagram.com/nikd.art" ></NavLogo>
                <NavBtn className="fas fa-envelope fa-lg contact-btn" clickAction={shrinkIntro} link="/contact" href="" />
                <NavBtn className="fas fa-user fa-lg" link="/about" href="" />
                <NavBtn className="fas fa-eye fa-lg" link="/work" href=""></NavBtn>
                {/* <NavBtn className="fas fa-th-list" href=""></NavBtn> */}
            </ul>
            <ul id="media-links">
                {/* <NavBtn className="fab fa-linkedin fa-lg" href="https://www.linkedin.com/in/devin-dev-davis-63008412b/"></NavBtn>
                <NavBtn className="fab fa-github fa-lg" href="https://github.com/barnacleDevelopments"></NavBtn> */}
            </ul>
        </Nav>
    )
}


export default SideNav;
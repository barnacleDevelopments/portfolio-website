import React, { FunctionComponent, useRef, useState } from "react";
import {Link} from "react-router-dom"
import NavLogo from "./NavLogo";
import NavBtn from "./NavBtn";
import styled from "@emotion/styled";

const Nav = styled("nav")`
    display: flex;
    position: fixed;
    bottom: 0px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    transition: top 1s;
    height: 60px;
    transition: backgroundColor 3s;
    z-index: 10000;
    background-color: #314455;
    overflow: hidden;

img {
    width: 60px;
    height: 60px;
    border: 5px solid #314455
}

ul.nav-list-closed {
    transform: translateX(100%);
}

ul {
    transition: transform 1s ease-in-out;
    transform: translateX(0%);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: #97aabd;
    column-gap: 2px;
    row-gap: 2px;
    height: 100%;
    li {
        display: flex;
        align-items: center;
        flex-basis: 0;
        flex-grow: 1;
        justify-content: center;
        background-color: #314455;
        height: 100%;
        color: white
    
    }
    a {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
    }
}
> div {
    color: white;
    font-size: 35px;
    margin-left: 20px;
    transform: translateX(-60px);
    transition: transform .7s ease-in-out;
    opacity: 0;
    position: absolute;
    z-index: 100000
}
> .back-btn-open {
    transform: translateX(0px);

i {
    color: white;
    transition: font-size .2s;
}
}
`

interface Navigation {
    closeIntro(): void
    openIntro(): void
}

const MainNav:FunctionComponent<Navigation> = ({openIntro, closeIntro}) => {
    const navListRef = useRef<HTMLUListElement>(null);
    const backBtnRef = useRef<HTMLDivElement>(null);

    const closeNav = () => {
        openIntro()
        const navList = navListRef.current
        const backBtn = backBtnRef.current
        navList?.classList.replace("nav-list-open", "nav-list-closed")
        backBtn?.classList.replace("back-btn-closed", "back-btn-open")
    }

    const openNav = () => {
        closeIntro()
        const navList = navListRef.current
        const backBtn = backBtnRef.current
        navList?.classList.replace("nav-list-closed", "nav-list-open")
        backBtn?.classList.replace("back-btn-closed", "back-btn-open")
    }

    return (
        <Nav className="main-nav">
            <div ref={backBtnRef} className="back-btn-closed" onClick={openNav} >
                <Link to="/" ><i className="fas fa-arrow-left"></i></Link>
            </div>
                <ul ref={navListRef} className={`nav-list-open`}>
                <NavLogo iconSrc="./img/logo_3.png" 
                        iconRef="https://www.instagram.com/nikd.art"></NavLogo>
                    <NavBtn className="fas fa-envelope fa-lg" clickAction={closeNav} link="/contact" href=""></NavBtn>
                    <NavBtn className="fas fa-user fa-lg" clickAction={closeNav} link="/about" href=""></NavBtn>
                    <NavBtn className="fas fa-eye fa-lg" clickAction={closeNav} link="/work" href=""></NavBtn>
                    {/* <NavBtn className="fas fa-th-list"  href=""></NavBtn> */}
                </ul>
        </Nav>
    )
}

export default MainNav;
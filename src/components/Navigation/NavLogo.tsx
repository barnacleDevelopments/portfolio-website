import React, { FunctionComponent } from "react"
import styled from "@emotion/styled";


const Logo = styled("li")`
    display: flex;
    align-items: center;
    transition: opacity .2s;
    :hover > div {
        opacity: 1;
        transform: scale(100%);
    }
    
`;

const RepBubble = styled("div")`
    background-color: #97aabd;
    position: absolute;
    padding: 5px;
    border-radius: 5px;
    top: 18px;
    left: 75px;
    width: fit-content;
    transition: opacity .2s;
    opacity: 0;
    transition: transform .3s;
    transform-origin: left;
    transform: scale(0%);
    div:nth-of-type(1) {
        background-color:#97aabd;
        position: relative;
        color: #97aabd;
        text-decoration: none;
        color: #fff;
        float: left;
    }

    div:nth-of-type(1)::after {
        position: absolute;
        top: 19px;
        left: -25px;
        content: '';
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid  #97aabd;
        border-bottom: 10px solid transparent;
        border-top: 10px solid transparent;
        display: flex;
        flex-direction: column;
     }

    a {
        background-color: #314455;
        color: #f5f5f5;
        padding: 5px 10px;
        margin: 3px;
        border-radius: 3px;
        display: flex;
        justify-content: flex-start;
        column-gap: 5px;
        font-size: 16px;
    }
`



interface logoData {
    iconSrc: string,
    iconRef?: string
}

const NavLogo:FunctionComponent<logoData> = ({iconSrc, iconRef}) => (
    <Logo>
        <RepBubble>
            <div className="left-arrow"></div>
            <div className="media-tag"><a href="https://www.instagram.com/nikd.art" target="_blanc"><i className="fab fa-instagram"></i> <span>Nikd.Art</span></a></div>
            <div className="media-tag"><a href="https://www.instagram.com/nikd.photos" target="_blanc"><i className="fab fa-instagram"></i> <span>Nikd.Photos</span></a></div>
        </RepBubble>
        <a href={iconRef} target="_blanc">
            <img src={iconSrc}/>
        </a>
    </Logo>
)

export default NavLogo;
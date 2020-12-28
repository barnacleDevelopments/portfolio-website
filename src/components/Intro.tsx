import React, { FunctionComponent, useRef, useState } from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

const Container = styled("div")`
    width: 100%;
    height: 100%;
    position: absolute;
    color: rgb(0, 0, 0);
    transform: translateY(0%);
    transition: transform .5s ease-in-out, width .5s;
    z-index: 9999;
    pointer-events: none;
    -moz-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
    display: grid;
    align-items: center;
    grid-template-rows: 1fr;
    height: 100%;
    background-color: #9e5a63;
    overflow: hidden;
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 40px 40px 74px 40px;
        height: 50%;
        text-align: center;
        h1 {
            margin-bottom: 30px;
            color: #f5f5f5;
        }
        div {
            height: 46.7px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        button:hover {
            background-color:#97aabd;
            border-width: 3px;
            border-color:#314455;
            border-radius: 10px;
            width: 120px;
            height: 50px;
        }

        button:hover span {
                transform: translateX(-2px);
            }
            
        }
    }
    .intro-closed {
        transform: translateY(100%);
    }
`;

const H01 = styled("h1")`
    color: #F5F5F5;
`
const Button = styled("button")`
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: 0px;
    background-color: #314455;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    bottom: 0px;
    height: 40px;
    overflow: hidden;
    position: relative;
    pointer-events: all;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.377);
    width: fit-content;
    transition: background-color 1s;
    transition: border-width .5s;
    transition: border-color .5s;
    transition: border-radius .2s;
    transition: width .5s;
    transition: height .5s;
    padding: 10px 20px;

    span:nth-of-type(1) {
        float:left
    }
    span:nth-of-type(2) {
        transform: translateX(50px);
        position: absolute;
        transition: transform .3s ease-in;
        font-weight: normal;
        font-style: italic;
    }
`

interface introData {
    head: string,
    introState?: {transform: string},
    openIntro?(): void
}

const IntroHeader: FunctionComponent<introData> = ({head}) => (
    <H01 id="main-heading">{head}</H01>
)


const Intro:FunctionComponent<introData> = ({head,introState, openIntro}) => {
    const introRef = useRef<HTMLDivElement>(null);

    return (
        <Container style={introState} id="intro" ref={introRef}>
            <div id="intro-text">
                <IntroHeader head={head}></IntroHeader>
                    <div>
                        <Link to="/contact"><Button onClick={openIntro} className="contact-btn"><span>contact</span><span>me</span></Button></Link>
                    </div>
                <div id="load-line-left"></div>
            </div>
        </Container>
    );
}

export default Intro;
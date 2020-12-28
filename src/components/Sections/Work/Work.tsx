import React, {FunctionComponent, useEffect, useState} from "react";
import useProjectList from "../../../hooks/useProjectList";
import styled from "@emotion/styled";

const CardBody = styled("div")`
    flex-basis: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    color: #f5f5f5;
    background-color: #f5f5f5;
    border-radius: 5px;
    position: relative;
    margin-bottom: 14px;

    button {
        border: none;
        border-radius: 5px;
        color: #f5f5f5;
        background-color: #97aabd;
        padding: 10px 20px;
        margin-top: 15px;
    }
    
    div {
        background-color: #314455;
        padding: 20px 15px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    
    img {
        width: 100%;
        max-width: 100%;
    }
`

interface CardData {
    id?: number,
    title: string,
    desc: string,
    link?: string
}

const Card:FunctionComponent<CardData> = ({title, desc, link}) => {
    return (
        <CardBody className="prod">
            <img src="./img/github_logo.png" />
            <div className="text">
                <h2>{title}</h2>
                <p>{desc}</p> 
                <a href={link}><button className="prod-btn">Explore</button></a>
            </div>
        </CardBody> 
    )
}

const Work:FunctionComponent = () => {

    const projects = useProjectList();


    return (
        <section className="page-section work">
            <article className="text-area">
                <h1>My Work</h1>
                <p>I currently do not have any magor projects under my belt
                however I am looking foward to filling this page with
                all kinds of cool stuff!</p>
            </article>
            <div className="projects">
                {projects.data.map((p) => (
                <Card key={p.id} 
                      title={p.title} 
                      desc={p.desc} />
                      ))
                }
            </div> 
        </section>
        )
}

 export default Work;
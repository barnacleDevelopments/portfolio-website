import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
::-webkit-scrollbar, #group-container::-webkit-scrollbar {
    width: 0;
}
    transition: transform .5s;
    transition-timing-function: ease-in-out;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform .5s;
    transition-timing-function: ease-in-out;
    overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    section {
        margin: 0 auto;
        padding: 14px;
        column-gap: 14px;
        row-gap: 14px;
        padding-bottom: 74px;
        display: grid;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        h1 {
            margin: 5px 0px 9px 0px;
        }
        h2 {
            margin-bottom: 10px;
            color: #f5f5f5;
        }
     
    }
    article {
        background-color: #9e5a63;
        color: white;
        padding: 14px;
        box-sizing: border-box;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.377);
    }
`;


const SectionContainer:FunctionComponent = (props) => (
     <Container id="group-container">
        {props.children}
     </Container>
)

export default SectionContainer
import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

/* About Section */
const Image = styled("img")`
    width: 100%;
    object-fit: cover;
`

const SkillsList = styled("ul")`
    margin-bottom: 18px;
    margin-top: 14px;
    list-style-type: decimal;
    margin-left: 30px;
`

const QualtiesList = styled("ol")`
    list-style-type: decimal;
    margin-left: 30px;
`

const About:FunctionComponent = () => {
        return (
            <section className="page-section about-me">
            <Image src="./img/self-portrait.jpg"/>
        
            <article className="text-area">
                <h2>About Me</h2>
                <p>Hey! My name is Devin Davis and I am a web development
                    student attending the Nova Scotia Community College. 
                    I have been studying web development for a year on my own prior to attending the college 
                    and I am looking forward to playing a part in building the web sector of my community. 
                    After looking over my site, please get in touch. I have got idle hands just waiting to create  
                    something awesome with you! </p>
                <h3>Working with Me</h3>
                <QualtiesList>
                    <li><span className="underline">Team oriented</span> and collaborative with differing personalities.</li>
                    <li>Maintains <span className="underline">positive attitude</span> in high stress environments.</li>
                    <li><span className="underline">Open minded</span> and adaptable.</li>
                    <li>Unyielding problem solver and <span className="underline">critical thinker.</span></li>
                    <li>Accountable and transparent.</li>
                    <li><span className="underline">Organized</span> and takes time management seriously.</li>          
                </QualtiesList>
            </article>
         
            <article className="text-area">
                <h2>Goals</h2>
                <p>I want to increase my professional competencies, so I set some SMART goals to accomplish them. </p>
                <h3>Short Term (Next 6 months)</h3>
                <SkillsList>
                    <li>Learn the basics of Webpack.</li>
                    <li>Learn the basics of the React library.</li>
                    <li>Learn the foundations of UX/UI design.</li>
                    <li>Determine 5 companies to work for.</li>
                </SkillsList>
                <h3>Mid Term (Next 2 years)</h3>
                <ul>
                    <li>Become a web developer for a company in Halifax.</li>
                    <li>Complete my NSCC deploma.</li>
                    <li>Learn the basics of calculus.</li>
                </ul>
        
                <h3>Long Term (Next 5 years)</h3>
                <ul>
                    <li>Create or help create a startup full scale startup web application.</li>
                    <li>Become a senior UI/UX expert.</li>
                </ul>
            </article>
            <Image src="./img/self_portrait_2.jpg"/>     
        </section>
        )
}
   
export default About;
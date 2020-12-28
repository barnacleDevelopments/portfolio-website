import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

const ContactSection = styled("section")`

form {
    font-size: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

input {
    background-color: #314455c2;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-bottom: 3px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.377);
    flex-basis: 10px;
    flex-grow: 1;
    flex-shrink: 1;
}

textarea {
    flex-basis: 100px;
    flex-grow: 3;
    background-color: #314455c2;
    border: none;
    color: #f5f5f5;
    font-size: 16px;
    padding: 20px 15px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.377);
}

button {
    margin-top: 14px;
    width: 100px;
    border: none;
    padding: 16px 15px;
    background-color: #97aabd;
    color: #f5f5f5;
    font-weight: bold;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.377);
}

`


const Contact:FunctionComponent = () => {
    return (
            <ContactSection className="page-section">
                <article className="text-area">
                    <h2>Contact Me</h2>
                    <p>I am always seeking new opportunities to
                    create and learn awesome things and I would love
                    to help you on your journey! Contact me with the
                    form bellow and I will be with you shortly.  
                    </p>
                </article>
                <form id="fcf-form-id" className="fcf-form-class" name="myform" method="post" action="contact-form.php" >
                    <input type="text" name="Name" placeholder="Name"></input>
                    <input type="text" name="email" placeholder="Email"></input>
                    <textarea id="Message" name="Message" className="fcf-form-control" required placeholder="Description"></textarea>
                    <button type="submit">Send</button>
                </form>
            </ContactSection>
    );
}
export default Contact;
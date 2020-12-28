import React, { FunctionComponent } from "react";
import {Link} from "react-router-dom";

interface btnData {
    className: string,
    href?: string,
    link: string,
    clickAction?(): void,

}

const NavBtn:FunctionComponent<btnData> = ({className, href, link, clickAction}) => {
  
   return (
    <li onClick={clickAction}>
        <Link to={link} >
            <i className={className}></i>
        </Link>
    </li>
   )
}

export default NavBtn;
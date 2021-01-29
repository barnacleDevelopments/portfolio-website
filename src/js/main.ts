/* 
Author: Devin Davis
Date: Novemeber 12th, 2020
File: index.js
*/

/*
=====================================
FUNCTIONS
=====================================
*/
import "../css/reset.css"
import "../css/global.css"
import "../css/index.css"
import "../css/layout.css"
import "../css/utilities.css"
import "../css/animations.css"

import $ from "jquery"
import { closeSections, openSection, displaySkillLevel } from "./functions/navigation"
import SkillContainer from "./components/SkillContainer"

/*
=====================================
EVENT HANDLERS
=====================================
*/

// When mobile back btn is pressed move the intro page cover on screen. 
$(".back-btn").on("click", () => {
    closeSections();
    return false;
});

// When mobile contact btn is pressed display work page.
$(".about-btn").on("click", () => {
    console.log("yo")
    openSection("about");
    return false;
});

// When mobile contact btn is pressed display work page.
$(".work-btn").on("click", () => {
    openSection("work");
    return false;
});

// When mobile contact btn is pressed display contact page.
$(".contact-btn").on("click", () => {
    openSection("contact");
    return false;
});

$(".skills-btn").on("click", () => {
    openSection("skills");
    return false;
});

$(".studies-btn").on("click", () => {
    openSection("studies");
    return false;
});

$(window).on("resize", () => {
    let windowWidth: number = window.innerWidth
    if (windowWidth < 1023) {
        $("#main-heading").text("Hi, I'm Dev the Developer.");
        $("#intro").css("width", "100%");
    } else {
        $("#intro").css("transform", "translateY(0%)");
        $(".main-nav").removeClass("back-nav");
        $(".back-btn").removeClass("back-btn-visible");
    }
});

interface skill {
    _id: number,
    name: string,
    desc: string,
    addonType: string,
    addons: [],
    level: string
}

$(".skills").children(".list-container")
    .children(".list")
    .children()
    .on("click", (e: any) => {
        let selectedSkillId = e.target.closest("li").id
        fetch("./skills.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                data.skills.forEach((s: skill) => {
                    if (s._id === parseInt(selectedSkillId)) {
                        $(".skills")
                            .children("article")
                            .remove();
                        let newSkillEl = new SkillContainer(
                            s.name,
                            s.desc,
                            s.addonType,
                            s.addons,
                        ).create();

                        $(".skills").prepend(newSkillEl);
                        displaySkillLevel(s.level);
                    }
                });
            }).catch(err => console.log(err))

        return false
    });
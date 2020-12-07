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

const openDesktopSection = (section) => {
    $("#spinner").css("display", "flex")
    $("#load-line-left").css("height", "0%")
   setTimeout(() => {
    $("#load-line-left").css("height", "100%")
    $(".about-me").css("display", "none");
    $(".skills").css("display", "none");
    $(".studies").css("display", "none");
    $(".contact-me").css("display", "none");
    $(".work").css("display", "none");
   }, 550)

    switch(section) {
        case "about":
            if($(".about-me").css("display") === "grid") {
                return false
            }
            $("#section-group").css("transform", "translate(100%)");
            $("#intro").css("width", "100%");
            setTimeout(() => {
                $("#intro").css("width", "60%");
                $("#section-group").css("transform", "translate(0%)");
                $("#main-heading").text("A little about me...");
                $(".about-me").css("display", "grid");
            }, 550);
            break
        case "skills":
            if($(".skills").css("display") === "grid") {
                return false
            }
            $("#section-group").css("transform", "translate(100%)");
            $("#intro").css("width", "100%");
            setTimeout(() => {
                $("#intro").css("width", "60%");
                $("#section-group").css("transform", "translate(0%)");
                $("#main-heading").text("What I have to offer...");
                $(".skills").css("display", "grid");
            }, 550)
            break
        case "work":
            if($(".work").css("display") === "grid") {
                return false
            }
            $("#section-group").css("transform", "translate(100%)");
            $("#intro").css("width", "100%");
            setTimeout(() => {
                $("#intro").css("width", "60%");
                $("#section-group").css("transform", "translate(0%)");
                $("#main-heading").text("This is some of my work...");
                $(".work").css("display", "grid")
            
            }, 550);
            break
        case "contact":
            if($(".contact-me").css("display") === "grid") {
                return false
            }
            $("#section-group").css("transform", "translate(100%)");
            $("#intro").css("width", "100%");
            setTimeout(() => {
                $("#intro").css("width", "60%");
                $("#section-group").css("transform", "translate(0%)");
                $("#main-heading").text("Lets get in touch...");
                $(".contact-me").css("display", "grid");
                $(".contact-me").css("height", "50%");
            }, 550);
        case "studies": 
        if($(".studies").css("display") === "grid") {
            return false
        }
        $("#section-group").css("transform", "translate(100%)");
        $("#intro").css("width", "100%");
        setTimeout(() => {
            $("#intro").css("width", "60%");
            $("#section-group").css("transform", "translate(0%)");
            $("#main-heading").text("What's on my mind...");
            $(".studies").css("display", "grid");
        }, 550);
        
    }

                return false
}

const openMobileSection = (section) => {
    $(".main-nav").addClass("back-nav");
    $("#intro").css("transform", "translateY(-100%)");
    $(".back-btn").addClass("back-btn-visible");
    $("#section-group").css("transform", "translateX(0%)")
    $(".about-me").css("display", "none");
    $(".skills").css("display", "none");
    $(".studies").css("display", "none");
    $(".contact-me").css("display", "none");
    $(".work").css("display", "none");
    switch(section) {
        case "about":
            $(".about-me").css("display", "grid")
        break
        case "skills":
            $(".skills").css("display", "grid")
        break
        case "work":
            $(".work").css("display", "grid");
        break
        case "contact":
            $(".contact-me").css("display", "grid")
        break
        case "skills": {
            $(".skills").css("display", "grid");
        }
    }
}


const openSection = (section) =>  {
    let windowWidth = parseInt(window.innerWidth)
    if(windowWidth < 1023) {
        openMobileSection(section)
    } 
    if(windowWidth > 1023) {
        openDesktopSection(section)
    }
}

const closeSections = () => {
    $(".main-nav").removeClass("back-nav");
    $("#intro").css("transform", "translateY(0%)");
    $(".back-btn").removeClass("back-btn-visible");
    $(".about-me").css("display", "none");
    $(".contact-me").css("display", "none");
    $(".work").css("display", "none");
}


/*
=====================================
EVENT HANDLERS
=====================================
*/

// When mobile back btn is pressed move the intro page cover on screen. 
$(".back-btn").on("click", () => {
    closeSections()
    return false
});

// When mobile contact btn is pressed display work page.
$(".about-btn").on("click", () => {
    openSection("about")
    return false
});
      
// When mobile contact btn is pressed display work page.
$(".work-btn").on("click", () => {
    openSection("work")
    return false
});

// When mobile contact btn is pressed display contact page.
$(".contact-btn").on("click", () => {
    openSection("contact")
    return false
});

$(".skills-btn").on("click", () => {
    openSection("skills")
    return false
});

$(".studies-btn").on("click", () => {
    openSection("studies")
    return false
});

$(window).on("resize", () => {
    let windowWidth = parseInt(window.innerWidth)
    if(windowWidth < 1023) {
        $("#main-heading").text("Hi, I'm Dev the Developer.");
        $("#intro").css("width", "100%");
    } else {
        $("#intro").css("transform", "translateY(0%)");
        $(".main-nav").removeClass("back-nav");
        $(".back-btn").removeClass("back-btn-visible");
      
    }
});

const displaySkillLevel = (level) => {
    $(".skill-level").children().text("")
    $(".skill-level").children().css("height", "10px");
    switch(level) {
        case "beginner":
            $(".skill-level").children(":nth-child(1)").css("height", "40px");
            $(".skill-level").children(":nth-child(1)").text("beginner");
            $(".skills").children("article").css("background-color", "#c96567")
        break
        case "intermediate":
            $(".skill-level").children(":nth-child(2)").css("height", "40px");
            $(".skill-level").children(":nth-child(2)").text("Intermediate");
            $(".skills").children("article").css("background-color", "#9e5a63")
        break
        case "advanced":
            $(".skill-level").children(":nth-child(3)").css("height", "40px");
            $(".skill-level").children(":nth-child(3)").text("Advanced");
            $(".skills").children("article").css("background-color", "#97aabd")
       

    }
}

$(".skills").children(".list").children().on("click", (e) => {
    let selectedSkillId = e.target.closest("li").id
    fetch("./data/skills.json")
    .then(response => response.json())
    .then(data =>  {
        data.skills.forEach(s => {
            if(s._id === parseInt(selectedSkillId)) {
                $(".skills").children("article").remove();
                let newSkillEl = new SkillContainer(
                    s.name, 
                    s.desc, 
                    s.addonType, 
                    s.addons
                    ).create();
                $(".skills").prepend(newSkillEl);
                console.log(s.level)
                displaySkillLevel(s.level)
              
            }
        })
    })

    return false
})


// $("#node-js").on("click", () => {
//     $(".skills").children("article").remove();

//     let newArticle = new SkillContainer("Node-Js", 
//     "A javascript runtime enviroment used to create network applications.", 
//     "Frameworks", ["Express"], 
//     "#c96567").create();
//     $(".skills").prepend(newArticle);
//     $(".skill-level").children().text("")
//     $(".skill-level").children().css("height", "10px");
//     $(".skill-level").children(":nth-child(1)").css("height", "40px");
//     $(".skill-level").children(":nth-child(1)").text("beginner");
//     return false
// });

// $("#html").on("click", () => {
//     $(".skills").children("article").remove();
//     let newArticle = new SkillContainer("HTML:5", 
//     "The markup language of the web.", 
//     "#97aabd").create()
//     $(".skills").prepend(newArticle)
//     $(".skill-level").children().text("")
//     $(".skill-level").children().css("height", "10px");
//     $(".skill-level").children(":nth-child(3)").css("height", "40px");
//     $(".skill-level").children(":nth-child(3)").text("Advanced")
//     return false
// });

// $("#css").on("click", () => {
//     $(".skills").children("article").remove();
//     let name ="Css3"
//     let desc =  "Cascading style sheets is a languaged used to style HTML markup."
//     let addons = [
//         {
//             name: "BootStrap", 
//             link: "https://getbootstrap.com/"
//         },
//         {
//             name: "Materialize", 
//             link: "https://materializecss.com/getting-started.html"
//         }
//     ]

//     let newArticle = new SkillContainer(name, desc, "Libaries", addons).create()
    
//     $(".skills").prepend(newArticle);
//     $(".skill-level").children().text("")
//     $(".skill-level").children().css("height", "10px");
//     $(".skill-level").children(":nth-child(3)").css("height", "40px");
//     $(".skill-level").children(":nth-child(3)").text("Advanced")
//     return false
// });

// $("#js").on("click", () => {
//     $(".skills").children("article").remove();
//     let name = "ECMAscript(JavaScript)";
//     let desc = "A scripting languaged orginaly designed to manipulate the DOM but is now widely used in other runtime enviroments."
//     let addons = [
//         {
//             name: "ReactJs", 
//             link: "https://reactjs.org/"
//         }
//       ]
//     let newArticle = new SkillContainer(name, desc, "Libaries", addons).create()
//     $(".skills").prepend(newArticle);
//     $(".skill-level").children().text("")
//     $(".skill-level").children().css("height", "10px");
//     $(".skill-level").children(":nth-child(2)").css("height", "40px");
//     $(".skill-level").children(":nth-child(2)").text("Intermediate")
//     return false
// });
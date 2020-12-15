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

const triggerLoadLine = () => {
    $("#load-line-left").css("height", "0%");
    setTimeout(() => {
    $("#load-line-left").css("height", "100%");
},  550);
}

const displayDesktopSection = (selector, sentence) => {
    if($(selector).css("display") === "grid") {
        return false
    }
    setTimeout(() => {
        $("#intro").css("width", "60%");
        $("#section-group").css("transform", "translate(0%)");
        $("#main-heading").text(sentence);
        $(selector).css("display", "grid");
    }, 550);

}

const openDesktopSection = (section) => {
    switch(section) {
        case "about":
            $("#section-group").css("transform", "translate(100%)");
            $("#intro").css("width", "100%");
            closeSections()
            triggerLoadLine()
            displayDesktopSection(".about-me", "A little about me...");
            break
            
        case "skills":
            $("#section-group").css("transform", "translate(100%)");
            $("#intro").css("width", "100%");
            closeSections()
            triggerLoadLine()
            displayDesktopSection(".skills", "What I have to offer...");
            break

        case "work":
            $("#section-group").css("transform", "translate(100%)");
            $("#intro").css("width", "100%");
            closeSections();
            triggerLoadLine();
            displayDesktopSection(".work", "This is some of my work...");
            break

        case "contact":
            $(".studies").css("display", "none")
            $("#section-group").css("transform", "translate(100%)");
            $("#intro").css("width", "100%");
            closeSections()
            triggerLoadLine()
            displayDesktopSection(".contact-me", "Lets get in touch...")
        break
        case "studies": 
            $("#section-group").css("transform", "translate(100%)");
            $("#intro").css("width", "100%");
            closeSections()
            triggerLoadLine()
            displayDesktopSection(".studies", "What's on my mind...")
        break    
    }
        return false
}

const openMobileSection = (section) => {
    closeSections()
    $("#intro").css("transform", "translateY(-100%)");
    $(".main-nav").addClass("back-nav");
    $(".back-btn").addClass("back-btn-visible");
    setTimeout(() => {
        $("#section-group").css("transform", "translateX(0%)");
    }, 500)
    switch(section) {
        case "about":
            $(".about-me").css("display", "grid");
        break
        case "skills":
            $(".skills").css("display", "grid");
        break
        case "work":
            $(".work").css("display", "grid");
        break
        case "contact":
            $(".contact-me").css("display", "grid");
        break
        case "skills": 
            $(".skills").css("display", "grid");
    }
}

const openSection = (section) =>  {
    let windowWidth = parseInt(window.innerWidth);
    if(windowWidth < 1023) {
        closeSections()
        openMobileSection(section);
    } 
    if(windowWidth > 1023) {
        closeSections()
        openDesktopSection(section);
    }
}

const closeSections = () => {
    $(".main-nav").removeClass("back-nav");
    $("#intro").css("transform", "translateY(0%)");
    $(".back-btn").removeClass("back-btn-visible");
    $(".about-me").css("display", "none");
    $(".contact-me").css("display", "none");
    $(".work").css("display", "none");
    $(".studies").css("display", "none");
    $(".skills").css("display", "none");
}

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
            $(".skills").children("article").css("background-color", "#c96567");
        break
        case "intermediate":
            $(".skill-level").children(":nth-child(2)").css("height", "40px");
            $(".skill-level").children(":nth-child(2)").text("Intermediate");
            $(".skills").children("article").css("background-color", "#9e5a63");
        break
        case "advanced":
            $(".skill-level").children(":nth-child(3)").css("height", "40px");
            $(".skill-level").children(":nth-child(3)").text("Advanced");
            $(".skills").children("article").css("background-color", "#97aabd");
       

    }
}



$(".skills").children(".list-container").children(".list").children().on("click", (e) => {
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
                console.log(s.level);
                displaySkillLevel(s.level);
              
            }
        });
    });

    return false
});
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
            $(".contact-me").css("height", "100%");
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



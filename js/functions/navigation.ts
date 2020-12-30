import $ from "jquery"

export const triggerLoadLine = () => {
    $("#load-line-left").css("height", "0%");
    setTimeout(() => {
    $("#load-line-left").css("height", "100%");
},  550);
}

export const displayDesktopSection = (selector: string, sentence: string) => {
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

export const openDesktopSection = (section:string) => {
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

export const openMobileSection = (section: string) => {
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

export const openSection = (section:string) =>  {
    let windowWidth:number= window.innerWidth;
    if(windowWidth < 1023) {
        closeSections()
        openMobileSection(section);
    } 
    if(windowWidth > 1023) {
        closeSections()
        openDesktopSection(section);
    }
}

export const closeSections = () => {
    $(".main-nav").removeClass("back-nav");
    $("#intro").css("transform", "translateY(0%)");
    $(".back-btn").removeClass("back-btn-visible");
    $(".about-me").css("display", "none");
    $(".contact-me").css("display", "none");
    $(".work").css("display", "none");
    $(".studies").css("display", "none");
    $(".skills").css("display", "none");
}

export const displaySkillLevel = (level:string) => {
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

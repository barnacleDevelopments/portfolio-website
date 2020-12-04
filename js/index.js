/* 
Author: Devin Davis
Date: Novemeber 12th, 2020
File: index.js
*/


/*
=====================================
MINI LIBRARY
=====================================
*/

const _ = (selector) => {
    let element = document.querySelector(selector)
    return {
        children: () => {
            return element.children
        },
        remove: () => {
            element.remove()
            return {
                next: {

                } 
            }
        },
        class: {
            add: (name) => {
                    element.classList.add(name)
            },
            remove: (name) => {
                    element.classList.remove(name)
            },
            list: () => {
                return element.classList
            }
         },
         hide: () => {
            element.style.display = "none"
         },
        attr: (name, value) => {
            element.setAttribute(name, value)
        },

        listen: (e, func) => {
            element.addEventListener(e, func)
        }
        }
        
    }

/*
=====================================
FUNCTIONS
=====================================
*/
    const moveDoor = () => {
        let door = $("#desktop-door")
        if(door.hasClass("open-door")) {
            door.removeClass("open-door")
            door.addClass("close-door")
        } 
        setTimeout(() => {
            door.addClass("open-door")
            door.removeClass("close-door")
        }, 500);
    }
/*
=====================================
MOBILE NAV EVENT HANDLERS
=====================================
*/

// When mobile nav item is pressed move the intro page cover off screen. 
$(".open-btn").on("click", (e) => {
    e.preventDefault();
    _(".main-nav").class.add("back-nav");
    $("#intro").css("transform", "translateY(-100%)");
    _(".back-btn").class.add("back-btn-visible");
    $("#section-group").css("transform", "translateX(0%)")
});

// When mobile back btn is pressed move the intro page cover on screen. 
_(".back-btn").listen("click", () => {
    _(".main-nav").class.remove("back-nav");
    $("#intro").css("transform", "translateY(0%)");
    _(".back-btn").class.remove("back-btn-visible");
    _(".about-me").attr("style", "display: none");
    _(".contact-me").hide()
    _(".work").hide()
});

// When mobile contact btn is pressed display work page.
_("#mobile-about-btn").listen("click", (e) => {
    e.preventDefault()
        $(".about-me").css("display", "grid")
});

      
// When mobile contact btn is pressed display work page.
_("#mobile-work-btn").listen("click", (e) => {
    e.preventDefault()
    _(".work").attr("style", "display: grid")
});

// When mobile contact btn is pressed display contact page.
$(".contact-btn").on("click", () => {
    let windowWidth = parseInt(window.innerWidth)
    $("#main-heading").text("Lets get in touch...");
    $(".contact-me").css("display", "grid")
    $(".work").css("display", "none")
    $(".about-me").css("display", "none")
    if(windowWidth < 1365) {
        $("#intro").css("transform", "translateY(-100%)");
        $(".back-btn").addClass("back-btn-visible");
    } else {
        $("#section-group").css("transform", "translate(100%)")
        $("#intro").css("width", "100%");
        setTimeout(() => {
            $("#intro").css("width", "60%");
        $("#section-group").css("transform", "translate(0%)")
        }, 500)

    }
        moveDoor()
        return false
})

/*
=====================================
DESKTOP NAV EVENT HANDLERS
=====================================
*/

// When desktop about btn is pressed display about page.
$("#side-about-btn").on("click", () => {
        moveDoor()
        $("#section-group").css("transform", "translate(100%)");
        $("#intro").css("width", "100%");
        setTimeout(() => {
            $(".about-me").css("display", "grid");
            $("#main-heading").text("A little about me...");
            _(".contact-me").hide()
            $("#intro").css("width", "60%");
            $("#section-group").css("transform", "translate(0%)");
            _(".work").hide()
        }, 500)
        return false

});

// When desktop contact btn is pressed display work page.
$("#side-work-btn").on("click", () => {
    moveDoor()
    $("#main-heading").text("This is some of my work...");
    $("#section-group").css("transform", "translate(100%)")
    $("#intro").css("width", "100%");
    setTimeout(() => {
        $("#section-group").css("transform", "translate(0%)");
        $("#intro").css("width", "60%");
        $(".work").css("display", "grid")
        $(".contact-me").css("display", "none");
        $(".about-me").css("display", "none");
     
    }, 500)
    return false
});

$(window).on("resize", () => {
    let windowWidth = parseInt(window.innerWidth)
    if(windowWidth < 1365) {
        _("#intro-text").children()[0].textContent = "Hi, I'm Dev the Developer.";
        $("#intro").css("width", "100%");
    } else {
        _("#intro").class.remove("lock-top");
        _(".main-nav").class.remove("back-nav");
        $(".back-btn").removeClass("back-btn-visible");
    }
   
});

/*
=====================================
DESKTOP ANIMATIONS
=====================================
*/

const slideInRight = (selector) => {
    $(selector).addClass("slideInRight");
}
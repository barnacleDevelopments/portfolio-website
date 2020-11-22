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
MOBILE NAV EVENT HANDLERS
=====================================
*/

// When mobile nav item is pressed move the intro page cover off screen. 
document.querySelectorAll(".open-btn").forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        _(".main-nav").class.add("back-nav");
        _(".doors").class.add("lock-top");
        _(".back-btn").class.add("back-btn-visible");
    });
});

// When mobile back btn is pressed move the intro page cover on screen. 
_(".back-btn").listen("click", () => {
    _(".main-nav").class.remove("back-nav");
    _(".doors").class.remove("lock-top");
    _(".back-btn").class.remove("back-btn-visible");
    _(".about-me").attr("style", "display: none");
    _(".contact-me").hide()
    _(".work").hide()
});

// When mobile about btn is pressed display about page.
_("#mobile-about-btn").listen("click", () => {
    _(".about-me").attr("style", "display: grid")
});

// When mobile contact btn is pressed display contact page.
document.querySelectorAll(".mobile-contact-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        _(".contact-me").attr("style", "display: grid")
    });
});

// When mobile contact btn is pressed display work page.
_("#mobile-work-btn").listen("click", () => {
    _(".work").attr("style", "display: grid")
});

/*
=====================================
DESKTOP NAV EVENT HANDLERS
=====================================
*/

const moveDoor = () => {
    let door = _("#desktop-door")
    if(door.class.list().contains("open-door")) {
        door.class.remove("open-door")
        door.class.add("close-door")
    } 
    setTimeout(() => {
        door.class.add("open-door")
        door.class.remove("close-door")
    }, 500);
}

const typeItIn = (title, element) => {
    let i, newTitle = ""
    for(i = 0; i < title.length; i++) {
        setTimeout(() => {
            newTitle += title[i]
            element.textContent = title
        }, 200);
    }
}

// When mobile about btn is pressed display about page.
_("#about-btn").listen("click", (e) => {
    e.preventDefault()
        let title =  _("#intro-text").children()[0]
        typeItIn("A little about me...", title)
        moveDoor()
        setTimeout(() => {
            _(".about-me").attr("style", "display: grid");
            _(".contact-me").hide();
            _(".work").hide()
        }, 520)
});

// When mobile contact btn is pressed display contact page.
document.querySelectorAll(".contact-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
            moveDoor()
            _("#intro-text").children()[0].textContent = "Lets ge in touch!"
            setTimeout(() => {
                _(".contact-me").attr("style", "display: grid")
                _(".work").hide()
                _(".about-me").hide();
            }, 520)
      
    });
});

// When mobile contact btn is pressed display work page.
_("#work-btn").listen("click", (e) => {
    e.preventDefault()
        moveDoor()
        _("#intro-text").children()[0].textContent = "This is some of my work..."
        setTimeout(() => {
            _(".work").attr("style", "display: grid")
            _(".contact-me").hide();
            _(".about-me").hide()
        }, 520)
});


// // on window resize check if portrait
// window.addEventListener("resize", () => {
//     if(window.innerHeight < window.innerWidth) {
//         document.querySelector(".piano").classList.add("open-piano")
//     } else {
//         document.querySelector(".piano").classList.remove("open-piano")
//     }
// });

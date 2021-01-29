/* 
Author: Devin Davis
Date: Decemer 4th, 2020
File: index.js
*/

const animatePreloader = () => {
    setTimeout(() => {
        $("#center-stick").css("transform", "translateY(120%)");
        $("#right-stick").css("transform", "translateY(50%)");
        $("#left-stick").css("transform", "translateY(50%)");
        setTimeout(() => {
            $("#center-stick").css({transform: "translateY(-120%)", transition: "transform .6s ease"});
            $("#right-stick").css({transform: "translateY(0%)", transition: "transform .5s ease"});
            $("#left-stick").css({transform: "translateY(0%)", transition: "transform .5s ease"});
            setTimeout(() => {
                $("#center-stick").css({transform: "translateY(-120%) rotate(180deg)", transition: "transform .5s ease" });
                setTimeout(() => {
                    $("#center-stick").css({transform: "rotate(0deg) translateY(-120%)", transition: "none"});
                    setTimeout(() => {
                        $("#center-stick").css({transform: "translateY(120%)",  transition: "transform .8s ease-in-out"});
                    }, 50)
                    setTimeout(() => {
                        $("#center-stick").css({transform: "translateY(120%)", transition: "transform .8s ease" });
                        $("#right-stick").css("transform", "translateY(50%)");
                        $("#left-stick").css("transform", "translateY(50%)");
                    }, 1000);
                },1000)
               
            }, 1000);
        }, 1000);
    }, 600);
}

// animatePreloader()

// setInterval(() => {
//     animatePreloader()
// }, 3600)

/* 
Author: Devin Davis
Date: Novemeber 12th, 2020
File: index.js
*/

document.querySelectorAll(".open-btn").forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".main-nav").classList.add("top-nav");
        document.querySelector(".air-lock").classList.add("lock-top");
        document.querySelector(".back-btn").classList.add("back-btn-visible");
    });
});

document.querySelector(".back-btn").addEventListener("click", () => {
    document.querySelector(".main-nav").classList.remove("top-nav");
    document.querySelector(".air-lock").classList.remove("lock-top");
    document.querySelector(".back-btn").classList.remove("back-btn-visible");
    document.querySelector(".about-me").style.display = "none"
    document.querySelector(".contact-me").style.display = "none"
    document.querySelector(".work").style.display = "none"

});

document.querySelector("#about-btn").addEventListener("click", () => {
    document.querySelector(".about-me").style.display = "grid"
});

document.querySelectorAll(".contact-btn").forEach(btn => {
    btn.addEventListener("click", () => {
    document.querySelector(".contact-me").style.display = "grid"
});
});

document.querySelector("#work-btn").addEventListener("click", () => {
    document.querySelector(".work").style.display = "grid"
});


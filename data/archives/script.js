const slash_bar = document.querySelector(".menu");
const slash_icon1 = document.querySelector(".slash:nth-child(1)");
const slash_icon2 = document.querySelector(".slash:nth-child(2)");
const slash_icon3 = document.querySelector(".slash:nth-child(3)");
const nav_bar = document.querySelector(".nav-bar");

slash_bar.addEventListener("click", function() {
    
    nav_bar.classList.toggle("active");
    slash_icon1.classList.toggle("active");
    slash_icon2.classList.toggle("active");
    slash_icon3.classList.toggle("active");
    slash_bar.classList.toggle("active");
    
});
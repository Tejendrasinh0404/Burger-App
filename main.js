
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll("nav__Link");

navLink.forEach(link=>
    link.addEventListener("click",()=>{
        navMenu.classList.add("hidden");
    })
    )

hamburger.addEventListener("click",()=>{
navMenu.classList.remove("hidden");
})
closeIcon.addEventListener("click",()=>{
navMenu.classList.add("hidden");
})
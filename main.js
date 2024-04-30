// hamburger menu for navbar 
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

// tabs 
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item__wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");



tabs.forEach(tab =>{
    tab.addEventListener("click",()=>{
        tabs.forEach(tab=>{tab.classList.remove("active")})
        tab.classList.add("active");

        const tabVal = tab.getAttribute("data-tabs");
        all.forEach(item=>{
            item.style.display= "none"
        })
        if(tabVal == "food"){
            foods.forEach(items=>{items.style.display = "block"})
        }

       else if(tabVal == "snack"){
            snacks.forEach(items=>{items.style.display = "block"})
        }
        else if(tabVal == "beverage"){
            beverages.forEach(items=>{items.style.display = "block"})
        }
        else {
            all.forEach(items=>{items.style.display = "block"})
        }
    })
})


// show scroll up 
const  scrollUp= ()=>{
    const scrollUpBtn = document.getElementById("scroll-up");
    if(scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }
 
}
window.addEventListener("scroll", scrollUp)
/* Handling the toggling of the mobile navbar menu */

// Getting the triggers from HTML
let menu = document.getElementById("menu")
let navbar = document.getElementById("navbar")
let mobile_navbar = document.getElementById("mobile_navbar")

// Menu Onclick opening of the navbar
menu.addEventListener("click", ()=>{

    navbar.style.display = "block"
    mobile_navbar.style.display = "none"

    let closer = document.getElementById("nav_closer")
    closer.addEventListener("click", ()=>{
        navbar.style.display = "none"
        mobile_navbar.style.display = "block"
    })
})


let nav_links = document.querySelectorAll(".nav_link")

nav_links.forEach(nav_link => {
    nav_link.addEventListener("click", ()=>{
        navbar.style.display = "none"
        mobile_navbar.style.display = "block"
    })
});
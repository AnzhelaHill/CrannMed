import {OpenMainNav, OpenBurgerNav, CloseBurgerNav, OpenBurgerNavLinks, handleCurrentYear} from "./Common.js"

document.addEventListener("DOMContentLoaded", function(){
// Common parth 
const allNavItems = document.querySelectorAll(".nav-item")
const burgerBtn = document.querySelector(".burger-btn")
const navbarBtnsBurger = document.querySelector(".navbar-btns-burger")
const navXmark = document.querySelector(".nav-xmark")
const allNavBurgerItems = document.querySelectorAll(".nav-item-burger")
const footerYear = document.querySelector(".footer__year")

handleCurrentYear()
document.addEventListener('click', OpenMainNav)
burgerBtn.addEventListener('click', OpenBurgerNav)
navXmark.addEventListener('click', CloseBurgerNav)
document.addEventListener('click', OpenBurgerNavLinks)
})
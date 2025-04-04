import {OpenMainNav, OpenBurgerNav, CloseBurgerNav, OpenBurgerNavLinks, handleCurrentYear} from "./Common.js"
import {OpenAnswer} from "./Common.js"

document.addEventListener("DOMContentLoaded", function(){
    const allNavItems = document.querySelectorAll(".nav-item")
    const burgerBtn = document.querySelector(".burger-btn")
    const navbarBtnsBurger = document.querySelector(".navbar-btns-burger")
    const navXmark = document.querySelector(".nav-xmark")
    const allNavBurgerItems = document.querySelectorAll(".nav-item-burger")
    const footerYear = document.querySelector(".footer__year")
	const videoOverlay = document.querySelector(".video-overlay")

    const PlayVideo = () => {
		videoOverlay.style.display = "none"
		video.play()
		video.setAttribute('controls', 'controls');
	}
    
    handleCurrentYear()
    document.addEventListener('click', OpenMainNav)
    burgerBtn.addEventListener('click', OpenBurgerNav)
    navXmark.addEventListener('click', CloseBurgerNav)
    document.addEventListener('click', OpenBurgerNavLinks)
	videoOverlay.addEventListener('click', PlayVideo)
    document.addEventListener('click', OpenAnswer)
})
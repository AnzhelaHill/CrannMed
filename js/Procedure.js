import {OpenMainNav, OpenBurgerNav, CloseBurgerNav, OpenBurgerNavLinks, handleCurrentYear} from "./Common.js"
import {OpenAnswer} from "./Common.js"

document.addEventListener("DOMContentLoaded", function(){
    // Common parth
    const allNavItems = document.querySelectorAll(".nav-item")
    const burgerBtn = document.querySelector(".burger-btn")
    const navbarBtnsBurger = document.querySelector(".navbar-btns-burger")
    const navXmark = document.querySelector(".nav-xmark")
    const allNavBurgerItems = document.querySelectorAll(".nav-item-burger")
    const footerYear = document.querySelector(".footer__year")
    // Parth of procedure
    const buttonsArea = document.querySelector('.buttons-expect')
    const buttons = document.querySelectorAll('.buttons-expect button')
    const contents = document.querySelectorAll('.tab-content')
    const faqItemAll = document.querySelectorAll(".faq-item")
    
    const ChangeInfo = (e) => {
        buttons.forEach(item => {
            item.classList.remove('active')
            if(e.target == item){
                item.classList.toggle('active')
                contents.forEach(item => {
                    item.classList.toggle('active')
                })
            }
        })
    }

    handleCurrentYear()
    document.addEventListener('click', OpenMainNav)
    burgerBtn.addEventListener('click', OpenBurgerNav)
    navXmark.addEventListener('click', CloseBurgerNav)
    document.addEventListener('click', OpenBurgerNavLinks)
    buttonsArea.addEventListener('click', ChangeInfo)
    document.addEventListener('click', OpenAnswer)
})
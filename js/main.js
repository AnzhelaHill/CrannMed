const allNavItems = document.querySelectorAll(".nav-item")
const burgerBtn = document.querySelector(".burger-btn")
const navbarBtnsBurger = document.querySelector(".navbar-btns-burger")
const navXmark = document.querySelector(".nav-xmark")
const allNavBurgerItems = document.querySelectorAll(".nav-item-burger")
const allCtaItems = document.querySelectorAll(".cta-item")
const allPhotoItems = document.querySelectorAll(".photo-item")
const arrowUpGalery = document.querySelector(".arrow-up")
const arrowDownGalery = document.querySelector(".arrow-down")
const progressLine = document.querySelector(":root")

 const OpenMainNav = (e) => {
	allNavItems.forEach(item => {
		const navLink = item.querySelector(".nav-link")
		const navLinkImg = item.querySelector(".nav-link img")
		const dropdownContent = item.querySelector(".dropdown-menu")
		if(e.target == item || e.target == navLink || e.target == navLinkImg) {
			dropdownContent.classList.toggle("dropdown-menu-toggle")
		} else {
			dropdownContent.classList.remove("dropdown-menu-toggle")
		}
	})
  };

const OpenBurgerNav = () => {
	navbarBtnsBurger.style.display = 'flex';
}

const CloseBurgerNav = () => {
	navbarBtnsBurger.style.display = 'none';
}

const OpenBurgerNavLinks = (e) => {
	allNavBurgerItems.forEach(item => {
		const navLink = item.querySelector('.nav-link-burger')	
		const navLinkImg = item.querySelector('.nav-link-burger img')
		const dropdownContent = item.querySelector('.dropdown-menu-burger')
		if(e.target == navLink || e.target == navLinkImg) {
			dropdownContent.classList.toggle("dropdown-menu-burger-toggle")
			navLink.classList.toggle("nav-link-burger-toggle")
		} else {
			dropdownContent.classList.remove("dropdown-menu-burger-toggle")
			navLink.classList.remove("nav-link-burger-toggle")
		}
	})
}

const PushDownBtnCtaItem = () => {
	for (let i = 0; i < allCtaItems.length; i++) {
		if (!allCtaItems[i].className.includes('inactive')) {
			allCtaItems[i].classList.add('inactive')
			allPhotoItems[i].classList.add('inactive')
			if (i == allCtaItems.length-1) {
				allCtaItems[0].classList.remove('inactive')
				allPhotoItems[0].classList.remove('inactive')
			} else {
				allCtaItems[i+1].classList.remove('inactive')
				allPhotoItems[i+1].classList.remove('inactive')
			}
			break
		}
	}
}

const PushUpBtnCtaItem = () => {
	for (let i = 0; i < allCtaItems.length; i++) {
		if (!allCtaItems[i].className.includes('inactive')) {
			allCtaItems[i].classList.add('inactive')
			allPhotoItems[i].classList.add('inactive')
			if (i == 0) {
				allCtaItems[allCtaItems.length-1].classList.remove('inactive')
				allPhotoItems[allCtaItems.length-1].classList.remove('inactive')
			} else {
				allCtaItems[i-1].classList.remove('inactive')
				allPhotoItems[i-1].classList.remove('inactive')
			}
			break
		}
	}
}

const prog = () => {
	console.log('click')
}

document.addEventListener('click', OpenMainNav)
burgerBtn.addEventListener('click', OpenBurgerNav)
navXmark.addEventListener('click', CloseBurgerNav)
document.addEventListener('click', OpenBurgerNavLinks)
arrowDownGalery.addEventListener('click',PushDownBtnCtaItem)
arrowUpGalery.addEventListener('click',PushUpBtnCtaItem)
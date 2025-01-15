const allNavItems = document.querySelectorAll(".nav-item")
const burgerBtn = document.querySelector(".burger-btn")
const navbarBtnsBurger = document.querySelector(".navbar-btns-burger")
const navXmark = document.querySelector(".nav-xmark")
const allNavBurgerItems = document.querySelectorAll(".nav-item-burger")
const allCtaItems = document.querySelectorAll(".cta-item")
const allPhotoItems = document.querySelectorAll(".photo-item")
const arrowUpGalery = document.querySelector(".arrow-up")
const arrowDownGalery = document.querySelector(".arrow-down")

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

const sizeOfOneElement = 100 / allCtaItems.length
const root = document.documentElement
const PushDownBtnCtaItem = () => {
	for (let i = 0; i < allCtaItems.length; i++) {
		let x = sizeOfOneElement * (i+1)
		if (!allPhotoItems[i].className.includes('inactive')) {
			allCtaItems[i].classList.remove('active-content')
			allPhotoItems[i].classList.remove('active-photo')
			allPhotoItems[i].classList.add('inactive')
			allPhotoItems[i].style.opacity = '0'
			allPhotoItems[i].style.maxHeight = '0px'
			allCtaItems[i].style.opacity = '0'
			allCtaItems[i].style.maxHeight = '0px'
			if (i == allCtaItems.length-1) {
				allPhotoItems[0].classList.remove('inactive')
				allPhotoItems[0].classList.add('active')
				allPhotoItems[0].style.maxHeight = '50vh'
				allPhotoItems[0].style.opacity = '1'
				root.style.setProperty('--progress-top', '0%')
				allCtaItems[0].style.maxHeight = '40vh'
				allCtaItems[0].style.opacity = '1'

			} else {
				allPhotoItems[i+1].classList.remove('inactive')
				allPhotoItems[i+1].classList.add('active')
				allPhotoItems[i].style.opacity = '0'
				allPhotoItems[i].style.maxHeight = '0px'
				allPhotoItems[i+1].style.maxHeight = '50vh'
				allPhotoItems[i+1].style.opacity = '1'
				root.style.setProperty('--progress-top', x + '%')
				allCtaItems[i].style.opacity = '0'
				allCtaItems[i].style.maxHeight = '0px'
				allCtaItems[i+1].style.maxHeight = '40vh'
				allCtaItems[i+1].style.opacity = '1'
			}
			break
		}
	}
}
const PushUpBtnCtaItem = () => {
	for (let i = 0; i < allCtaItems.length; i++) {
		let x = sizeOfOneElement * (i-1)
		if (!allPhotoItems[i].className.includes('inactive')) {
			allPhotoItems[i].classList.add('inactive')
			allPhotoItems[i].classList.remove('active')
			allCtaItems[i].style.maxHeight = '0px'
			allCtaItems[i].style.opacity = '0'
			if (i == 0) {
				allPhotoItems[allCtaItems.length-1].classList.add('active')
				allPhotoItems[allCtaItems.length-1].classList.remove('inactive')
				x = sizeOfOneElement * (allCtaItems.length-1) 
				root.style.setProperty('--progress-top', x + '%')
				allCtaItems[allCtaItems.length-1].style.maxHeight = '40vh'
				allCtaItems[allCtaItems.length-1].style.opacity = '1'
			} else {
				allPhotoItems[i-1].classList.add('active')
				allPhotoItems[i-1].classList.remove('inactive')
				root.style.setProperty('--progress-top', x + '%')
				allCtaItems[i-1].style.maxHeight = '40vh'
				allCtaItems[i-1].style.opacity = '1'

			}
			break
		}
	}
}



document.addEventListener('click', OpenMainNav)
burgerBtn.addEventListener('click', OpenBurgerNav)
navXmark.addEventListener('click', CloseBurgerNav)
document.addEventListener('click', OpenBurgerNavLinks)
arrowDownGalery.addEventListener('click',PushDownBtnCtaItem)
arrowUpGalery.addEventListener('click',PushUpBtnCtaItem)
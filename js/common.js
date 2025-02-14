document.addEventListener("DOMContentLoaded", function(){

	const allNavItems = document.querySelectorAll(".nav-item")
	const burgerBtn = document.querySelector(".burger-btn")
	const navbarBtnsBurger = document.querySelector(".navbar-btns-burger")
	const navXmark = document.querySelector(".nav-xmark")
	const allNavBurgerItems = document.querySelectorAll(".nav-item-burger")
	const footerYear = document.querySelector(".footer__year")
	const videoOverlay = document.querySelector(".video-overlay")
	const video = document.querySelector("#video")

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
		navbarBtnsBurger.classList.add('nav-active')
	}

	const CloseBurgerNav = () => {
		navbarBtnsBurger.classList.remove('nav-active')
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

	const handleCurrentYear = () => {
		const year = (new Date).getFullYear();
		footerYear.innerText = year;
	}
	handleCurrentYear()

	const PlayVideo = () => {
		videoOverlay.style.display = "none"
		video.play()
		video.setAttribute('controls', 'controls');
	}

	document.addEventListener('click', OpenMainNav)
	burgerBtn.addEventListener('click', OpenBurgerNav)
	navXmark.addEventListener('click', CloseBurgerNav)
	document.addEventListener('click', OpenBurgerNavLinks)
	videoOverlay.addEventListener('click', PlayVideo)
})




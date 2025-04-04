	const allNavItems = document.querySelectorAll(".nav-item")
	const burgerBtn = document.querySelector(".burger-btn")
	const navbarBtnsBurger = document.querySelector(".navbar-btns-burger")
	const navXmark = document.querySelector(".nav-xmark")
	const allNavBurgerItems = document.querySelectorAll(".nav-item-burger")
	const footerYear = document.querySelector(".footer__year")
	const faqItemAll = document.querySelectorAll(".faq-item")

	export const OpenMainNav = (e) => {
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

	export const OpenBurgerNav = () => {
		navbarBtnsBurger.classList.add('nav-active')
	}

	export const CloseBurgerNav = () => {
		navbarBtnsBurger.classList.remove('nav-active')
	}

	export const OpenBurgerNavLinks = (e) => {
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

	export const handleCurrentYear = () => {
		const year = (new Date).getFullYear();
		footerYear.innerText = year;
	}
	
	export const OpenAnswer = (e) => {
		faqItemAll.forEach(item => {
			const faqAnswer = item.querySelector('.faq-answer')
			const faqQuestion = item.querySelector('.faq-question')
			const iQuestion = faqQuestion.querySelector('.fa-solid')
			const pQuestion = faqQuestion.querySelector('p')

			const OpenList = () => {
				faqAnswer.style.maxHeight = "400px"
				faqQuestion.style.backgroundColor = "#20c7c7"
				faqQuestion.style.borderColor = "#20c7c7"
				iQuestion.style.rotate = "180deg"
			}
			const CloseList = () => {
				faqAnswer.style.maxHeight = "0px"
				faqQuestion.style.backgroundColor = "#fff"
				faqQuestion.style.borderColor = "var(--main-color)"
				iQuestion.style.rotate = "0deg"
			}
			if(e.target == faqQuestion || e.target == iQuestion || e.target == pQuestion) {
				faqQuestion.classList.toggle('hover')
				faqAnswer.classList.toggle('active')
				if (faqAnswer.classList.contains('active')) {
					OpenList()
				} else {
					CloseList()
				}
			} else {
				faqQuestion.classList.remove('hover')
				faqAnswer.classList.remove('active')
				CloseList()
			}    
			if (!faqQuestion.classList.contains('hover')) {
				faqQuestion.addEventListener('mouseover', () => {
					faqQuestion.style.backgroundColor = '#20c7c727'
				})  
				faqQuestion.addEventListener('mouseout', () => { 
					faqQuestion.style.backgroundColor = '#fff'
				})
			} else {
				faqQuestion.addEventListener('mouseover', () => {
					faqQuestion.style.backgroundColor = '#20c7c7'
				})  
				faqQuestion.addEventListener('mouseout', () => { 
					faqQuestion.style.backgroundColor = '#20c7c7'
				})
			}
			
		}
	)}
	
	// handleCurrentYear()
	// document.addEventListener('click', OpenMainNav)
	// burgerBtn.addEventListener('click', OpenBurgerNav)
	// navXmark.addEventListener('click', CloseBurgerNav)
	// document.addEventListener('click', OpenBurgerNavLinks)




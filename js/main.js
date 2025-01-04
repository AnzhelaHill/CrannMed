const allNavItems = document.querySelectorAll(".nav-item")
const burgerBtn = document.querySelector(".burger-btn")
const navbarBtnsBurger = document.querySelector(".navbar-btns-burger")
const navXmark = document.querySelector(".nav-xmark")

document.addEventListener('click', (e) => {
	allNavItems.forEach(item => {
		const navLink = item.querySelector(".nav-link")
		const dropdownContent = item.querySelector(".dropdown-menu")
		if(e.target == item || e.target == navLink) {
			dropdownContent.classList.toggle("dropdown-menu-toggle")
		} else {
			dropdownContent.classList.remove("dropdown-menu-toggle")
		}
	})
  });

const OpenBurgerNav = () => {
	navbarBtnsBurger.style.display = 'flex';
}

const CloseBurgerNav = () => {
	navbarBtnsBurger.style.display = 'none';
}

burgerBtn.addEventListener('click', OpenBurgerNav)
navXmark.addEventListener('click', CloseBurgerNav)
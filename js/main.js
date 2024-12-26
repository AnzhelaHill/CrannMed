const allNavItems = document.querySelectorAll(".nav-item")
const dropdownMenu = document.querySelectorAll(".dropdown-menu")
// const body = document.querySelector("body")

allNavItems.forEach(item => {
	const dropdownContent = item.querySelector(".dropdown-menu")
	item.addEventListener("click", () => {
		dropdownContent.classList.toggle("dropdown-menu-toggle")
		allNavItems.forEach(otherItem => {
			if (otherItem !== item) {
				otherItem
					.querySelector(".dropdown-menu")
					.classList.remove("dropdown-menu-toggle")
			}
		})
	})
})

// function closeNavigation() {
// 	allNavItems.forEach(item => {
// 	    item.querySelector('.dropdown-menu').classList.remove('dropdown-menu-toggle')
// 	})
// }

// body.addEventListener('click', closeNavigation)

// document.addEventListener('click', (e) => {
//     console.log(e)
//   });

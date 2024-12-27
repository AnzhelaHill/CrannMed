const allNavItems = document.querySelectorAll(".nav-item")

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

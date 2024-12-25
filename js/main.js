const allNavItems = document.querySelectorAll('.nav-item');
const dropdownMenu = document.querySelectorAll('.dropdown-menu');


allNavItems.forEach(item => item.addEventListener('click', () => {
    const test = item.querySelector('.dropdown-menu')
    allNavItems.classList.remove("dropdown-menu-toggle")
    test.classList.toggle("dropdown-menu-toggle") //TODO click everyvhere and close dropdown-menu
}))

  
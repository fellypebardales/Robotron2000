const botaoMenu = document.querySelector(".header_menu")
const menu = document.querySelector(".nav_menu_list")

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('nav_menu_list-at')
})



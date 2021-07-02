const menuMobile = document.getElementById('menu-mobile')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('header__menu--active')
    document.getElementsByClassName('header__ul')[0].classList.toggle('header__ul--active')
})
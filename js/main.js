const menuMobile = document.getElementById('menu-mobile')
const links = document.querySelectorAll('.link')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('header__menu--active')
    document.getElementsByClassName('header__ul')[0].classList.toggle('header__ul--active')

    if(document.getElementsByClassName('header__ul')[0].classList.contains('header__ul--active')) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'initial'
    }
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('header__menu--active')
        document.getElementsByClassName('header__ul')[0].classList.remove('header__ul--active')
        document.body.style.overflowY = 'initial'
    })
})
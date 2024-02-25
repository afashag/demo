const headerMenu = document.querySelector('.header__menu')
const burger = document.querySelector('.burger')
const body = document.querySelector('.body')


burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    headerMenu.classList.toggle('active')
    body.classList.toggle('active')

})
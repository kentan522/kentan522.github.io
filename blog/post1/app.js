const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active'); // add the class 'is-active' to the #mobile-menu id element (triggers change)
    menuLinks.classList.toggle('active');
})
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger--js');
    const navMenu = document.querySelector('.header__menu--js');
    console.log(navMenu)

    burger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    })
});
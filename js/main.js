document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mainMenu = document.querySelector('.main-menu');

    menuIcon.addEventListener('click', function() {
        mainMenu.classList.toggle('active');
    });
});
function toggleMenu () {
    const menuButton = document.querySelector(".header__burger");
    const closeButton = document.querySelector(".header__close");
    const menu = document.querySelector(".header__menu");

    const showMenu = () => {
        menu.classList.toggle('header__menu--close');
        menuButton.classList.toggle('header__burger--active');
    };

    const closeMenu = () => {
        menu.classList.add('header__menu--close');
        menuButton.classList.remove('header__burger--active');
    };

    menuButton.addEventListener('click', showMenu);
    closeButton.addEventListener('click', closeMenu);
};

toggleMenu();
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');
const sideMenu = document.querySelector('.m-menu');
const sideMenuOverlay = document.querySelector('.m-menu-overlay');

navToggle.addEventListener('click', open);
navClose.addEventListener('click', close);

function close() {
    sideMenu.style.right= '-100%';
    sideMenuOverlay.style.display = 'none';
}

function open() {
    sideMenu.style.right= '0';
    setTimeout(() => {
        sideMenuOverlay.style.display = 'block';
    }, 100);
}
const btn = document.querySelector('.btn-toggle');
const nav = document.querySelector('.nav-menu');
const img = document.querySelector('#nav-menu-icon');

let toggle = false;

btn.addEventListener('click', () => {
    toggle = !toggle;
    if(toggle) {
        nav.classList.add('active');
        img.src = './assets/media/croix.png';
    }
    else {
        nav.classList.remove('active');
        img.src = './assets/media/menu.svg';
    }
});
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-icon');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times')
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});
new WOW().init();
    
    

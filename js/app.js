const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
menu.addEventListener('click', function() { 
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
}) 


const toggle = document.getElementById('toggledark');
const dark = document.querySelector('.container-1');
let nav = document.querySelector('.nav-container');

const span = document.querySelector('.span');

toggle.addEventListener('click', function() { 
    this.classList.toggle('mdi-moon-waning-gibbous');
    if (this.classList.toggle('mdi-white-balance-sunny')) {
        dark.style.background = 'rgb(14, 21, 39)';
        span.style.color = 'white';
    } else {
        dark.style.background = 'white';
        span.style.color = 'rgb(14, 21, 39)';
    }
}) 
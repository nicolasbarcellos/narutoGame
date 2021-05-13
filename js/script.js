
const x = window.matchMedia("(max-width: 1070px)");
const mobile = window.matchMedia("(max-width: 750px)");

const menuMobile = document.querySelector('.menuMobile');
const menu = document.querySelector('.menu');
const panel = document.querySelector('.panel');
const logo = document.querySelector('.logo img');
const social = document.querySelector('.social');
const flags = document.querySelector('.langIcons');

function test(x) {
  if (x.matches) {
    menuMobile.style.display = 'inline-block';
    menu.style.display = 'none';

  } else {
    menuMobile.style.display = 'none';
    menu.style.display = 'flex';
  }

  if (mobile.matches) {
    social.style.display = 'none';
    flags.style.display = 'none';
    logo.src = 'assets/logo-mobile.png';
  }  else {
    logo.src = 'assets/logo.png';
  }
}


function aaa() {

    if (panel.classList.contains('show')) {
     panel.classList.remove('show')
     menuMobile.classList.remove('round');
    } 
    else {
     menuMobile.classList.add('round');
     panel.classList.add('show');
    } 
}

menuMobile.addEventListener('click', aaa);
x.addEventListener('change', test);
mobile.addEventListener('change', test);
test(x);
test(mobile);
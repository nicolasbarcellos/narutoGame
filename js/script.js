
const x = window.matchMedia("(max-width: 1070px)");

const menuMobile = document.querySelector('.menuMobile');
const menu = document.querySelector('.menu');
const panel = document.querySelector('.panel');

function test(x) {
  if (x.matches) {
    menuMobile.style.display = 'inline-block';
    menu.style.display = 'none';

   menuMobile.addEventListener('click', () => {
     if (panel.classList.contains('show')) {
      panel.classList.remove('show')
      menuMobile.classList.remove('round');
     } 
     else {
      menuMobile.classList.add('round');
      panel.classList.add('show');
     } 
   });


  } else {
    menuMobile.style.display = 'none';
    menu.style.display = 'flex';
  }
}

// function showPanel {
//   console.log('object');
// }

x.addListener(test)
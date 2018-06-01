const toggler = document.querySelector('.nav__toggler');
const navList = document.querySelector('.nav__list');
const span  = document.querySelector('span');

function navToggle(){
  navList.classList.toggle('nav__list');
  navList.classList.toggle('nav__list--mobile');
  span.classList.toggle('active');
};

toggler.addEventListener('click', navToggle);




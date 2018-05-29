const toggler = document.querySelector('.nav__toggler');
const navList = document.querySelector('.nav__list');

function navToggle(){
  navList.classList.toggle('nav__list');
  navList.classList.toggle('nav__list--mobile');
};

toggler.addEventListener('click', navToggle);




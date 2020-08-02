let menuBtn = document.querySelector('.header__menu');
let header = document.querySelector('header');

menuBtn.addEventListener('click', openMenu);

function openMenu() {

  console.log('click-click');
}

let toggle = document.querySelector('.toggle__checkbox');

toggle.addEventListener('change', switchMode);

function switchMode(event) {
  //console.log('switch-switch');
  if (event.target.checked) {
    header.classList.add('header--light');
  } else {
    header.classList.remove('header--light');
  }
}
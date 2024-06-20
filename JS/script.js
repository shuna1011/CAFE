let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  carroPro.classList.remove('active');
  fav.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  carroPro.classList.remove('active');
  fav.classList.remove('active');
}

let carroPro = document.querySelector('.productos-carro-contenido');

document.querySelector('#bag-btn').onclick = () =>{
  carroPro.classList.toggle('active');
  navbar.classList.remove('active');
  fav.classList.remove('active');
  searchForm.classList.remove('active');
}

let fav = document.querySelector('.fav-cont')

document.querySelector('#fav-btn').onclick = () =>{
  carroPro.classList.remove('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  fav.classList.toggle('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  carroPro.classList.remove('active');
}


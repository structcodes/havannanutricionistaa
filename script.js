const btnMenu = document.getElementById('btn-menu');
const navList = document.querySelector('.nav-list');
const links = document.querySelectorAll('.nav-list a');

btnMenu.addEventListener('click', ()=>{
  navList.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', ()=>{
    navList.classList.remove('active');
  });
});
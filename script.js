const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


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
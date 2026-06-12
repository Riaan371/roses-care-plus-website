document.getElementById('year').textContent = new Date().getFullYear();

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileNav.classList.remove('open');
  });
});

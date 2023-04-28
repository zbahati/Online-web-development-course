const moreStaffCard = document.querySelector('#listed-more-staff');
const moreBtn = document.querySelector('#moreBtn');

moreBtn.addEventListener('click', () => {
  if (moreBtn.textContent === 'See Less') {
    moreStaffCard.classList.toggle('active');
    moreBtn.classList.toggle('active');
    moreBtn.textContent = 'See More';
  } else {
    moreStaffCard.classList.toggle('active');
    moreBtn.classList.toggle('active');
    moreBtn.textContent = 'See Less';
  }
});

const navLink = document.querySelector('#menu-mobile');
const hamburgerBtn = document.querySelector('#hamburger-btn');
const closeBtn = document.querySelector('#close-btn');
const navbar = document.querySelector('#navbar');
const header = document.querySelector('header');

hamburgerBtn.addEventListener('click', () => {
  const linkText = document.querySelectorAll('nav > ul > li > a');
  linkText.forEach((link) => {
    link.classList.add('link-color');
    link.addEventListener('click', () => {
      header.classList.remove('.header-mobile');
    });
  });

  navbar.classList.add('navbar');
  header.classList.add('header-mobile');
  closeBtn.style.display = 'flex';
  closeBtn.style.justifyContent = 'flex-start';
  navLink.style.display = 'flex';
  navLink.style.gap = '30px';
  navLink.style.flexDirection = 'column';
  navLink.style.marginTop = '60px';
  hamburgerBtn.classList.add('disable');

  closeBtn.addEventListener('click', () => {
    header.classList.remove('header-mobile');
    hamburgerBtn.classList.remove('disable');
    navbar.classList.remove('navbar');
    navLink.style.display = 'none';
    closeBtn.style.display = 'none';
  });
});

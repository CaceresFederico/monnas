const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.addEventListener('click', () => {
    console.log(menuIcon);
    console.log(navLinks);
    navLinks.classList.toggle('active');
})
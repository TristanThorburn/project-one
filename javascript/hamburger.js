// HAMBURGER MENU

// Target hamburger menu symbol for animation and use desktop's nav bar with diff formatting to slide out
// Define hamburger button
const hamburger = document.querySelector('.hamburger');
// Define nav bar to slide out
const fullMenu = document.querySelector('.desktop-nav-bar');
// Define links in nav bar to close menu
const closeHamburgerMenu = document.querySelectorAll('nav-link');

// Open menu and animate change of symbol
hamburger.addEventListener('click', () => {
    // console.log(EventTarget);
    // Alternate hamburger and X visual stylings
    hamburger.classList.toggle('active');
    // Translate hidden desktop menu to screen
    fullMenu.classList.toggle('active');
})
// Return to default if a link is clicked
closeHamburgerMenu.forEach((navLink) => {
    navLink.addEventListener('click', function() {
    hamburger.classList.remove('active');
    fullMenu.classList.remove('active');
    });
});

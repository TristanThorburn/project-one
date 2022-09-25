// HAMBURGER MENU

// Target hamburger menu symbol for animation and use desktop's nav bar with diff formatting to slide out
const hamburger = document.querySelector('.hamburger');
const fullMenu = document.querySelector('.desktop-nav-bar');


// Open menu and animate change of symbol
hamburger.addEventListener('click', () => {
    // console.log(EventTarget);
    hamburger.classList.toggle('active');
    fullMenu.classList.toggle('active');
})
// Return to default if a link is clicked
// I would have never figured out line 16's n => n without this video which heavily guided
// my construction of this hamburger menu: https://youtu.be/flItyHiDm7E
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    fullMenu.classList.remove('active');
}))

// IMAGE CAROUSEL

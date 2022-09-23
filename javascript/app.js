const hamburger = document.querySelector('.hamburger');
const fullMenu = document.querySelector('.desktop-nav-bar');

// const slideOutMenu = (activate) => {
//     activate.classList.add("active");
//     activate.classList.remove("active");
// }

hamburger.addEventListener('click', () => {
    console.log(EventTarget);
    hamburger.classList.toggle('active');
    fullMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    fullMenu.classList.remove('active');
}))
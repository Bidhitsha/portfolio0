let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active'); // Corrected typo here
            });
        }
    });
};

menu.onclick = () => { // Corrected typo here and changed to onclick
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Add event listener to close the navbar when a link is clicked (for mobile responsiveness)
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Adjust breakpoint as needed
            menu.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});
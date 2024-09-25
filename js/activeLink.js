const navLinks = document.querySelectorAll('nav ul li a');

const activeLink = document.querySelector('nav ul li.active a');
if (activeLink) {
    setActiveLink(activeLink);
}

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {

        navLinks.forEach(l => l.parentNode.classList.remove('active'));

        this.parentNode.classList.add('active');
    });
});

function setActiveLink(link) {
    link.parentNode.classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close-btn');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
        menuIcon.classList.toggle('toggle');
    });

    closeBtn.addEventListener('click', function() {
        navLinks.classList.remove('nav-active');
        menuIcon.classList.remove('toggle');
    });
});

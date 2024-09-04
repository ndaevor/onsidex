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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// loader
window.addEventListener('load', function() {
    // Hide the loading screen
    document.getElementById('loading-screen').style.display = 'none';
    
    // Show the content
    document.getElementById('content').style.display = 'block';
});

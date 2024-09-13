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
// window.addEventListener('load', function() {
//     // Hide the loading screen
//     document.getElementById('loading-screen').style.display = 'none';
    
//     // Show the content
//     document.getElementById('content').style.display = 'block';
// });

window.addEventListener('load', function() {
    // Hide the loading screen
    document.getElementById('loading-screen').style.display = 'none';
    
    // Show the content
    document.getElementById('content').style.display = 'block';
});

// Fallback for slower loading on mobile devices
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (document.getElementById('loading-screen').style.display !== 'none') {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }
    }, 5000); // Fallback time after which loading screen hides (5 seconds)
});



//scroll effect
const carousel = document.querySelector('.carousel');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function autoScroll() {
  currentIndex = (currentIndex + 1) % totalItems;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-scroll every 5 seconds
setInterval(autoScroll, 5000);

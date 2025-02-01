// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');
const body = document.body;

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    // Prevent body scrolling when menu is open
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Handle dropdowns in mobile view
dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    
    dropbtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            dropdown.classList.toggle('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        body.style.overflow = '';
    }
});

// Close mobile menu when window is resized above mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        body.style.overflow = '';
    }
});

// Set the conference date (April 30, 2025)
const conferenceDate = new Date('2025-04-30T00:00:00').getTime();

// Update countdown every second
const countdown = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the conference date
    const distance = conferenceDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the results
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // If the countdown is finished, display expired message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}, 1000);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Register button click handler
document.querySelector('.register-btn').addEventListener('click', function() {
    // Add registration functionality here
    window.location.href = '#register';
});

// Watch highlights button click handler
document.querySelector('.watch-btn').addEventListener('click', function() {
    // Add video player functionality here
    // For example, open a modal with the video
    alert('Video highlights coming soon!');
});

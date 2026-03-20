// script.js - Joseph Dinye Portfolio Enhancements

document.addEventListener('DOMContentLoaded', () => {

    // 1. Floating particles
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        const count = 30;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            
            // Random position, duration, delay
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = (Math.random() * 20 + 20) + 's';
            p.style.animationDelay = Math.random() * 15 + 's';
            
            // Cyan / blue tones to match cyber theme
            const colors = ['#00f0ff', '#00b2ff', '#0099ff', '#40c4ff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            p.style.background = color;
            p.style.boxShadow = `0 0 12px ${color}80`;
            
            container.appendChild(p);
        }
    }
    createParticles();

    // 2. Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 4. Active nav + navbar scrolled style
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    function updateNav() {
        const scrollY = window.scrollY + 120; // offset for fixed nav

        let current = '';
        sections.forEach(section => {
            if (section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });

        // Scrolled navbar style
        if (navbar) {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    window.addEventListener('scroll', updateNav);
    updateNav(); // initial call
});

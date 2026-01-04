/**
 * Mrs Andrea Burgess - ENT Consultant
 * Main JavaScript
 */

(function() {
    'use strict';

    // DOM Elements
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    const currentYearEl = document.getElementById('current-year');

    // Set current year in footer
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle
    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('active');
        });

        // Close navigation when clicking a link
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
            });
        });

        // Close navigation when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
                navToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
            }
        });

        // Close navigation on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && nav.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
                navToggle.focus();
            }
        });
    }

    // Header scroll effect (optional subtle shadow enhancement)
    let lastScrollY = 0;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '';
        }

        lastScrollY = currentScrollY;
    }

    // Throttle scroll events for performance
    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Smooth scroll for anchor links (progressive enhancement)
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                const target = document.querySelector(href);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // Intersection Observer for section highlighting (optional)
    if ('IntersectionObserver' in window) {
        const sections = document.querySelectorAll('.section[id]');

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');

                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(function(section) {
            observer.observe(section);
        });
    }

})();

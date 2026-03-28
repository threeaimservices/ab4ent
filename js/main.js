(function() {
    'use strict';

    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    const currentYearEl = document.getElementById('current-year');

    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Mobile Navigation
    if (navToggle && nav) {
        const closeNav = function() {
            navToggle.setAttribute('aria-expanded', 'false');
            nav.classList.remove('active');
        };

        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('active');
        });

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        event.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        history.pushState(null, null, href);
                    }
                }
                closeNav();
            });
        });

        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
                closeNav();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && nav.classList.contains('active')) {
                closeNav();
                navToggle.focus();
            }
        });
    }

    // Header scroll shadow
    let hasShadow = false;

    function handleScroll() {
        if (!header) return;
        const needsShadow = window.scrollY > 50;
        if (needsShadow === hasShadow) return;
        hasShadow = needsShadow;
        header.style.boxShadow = hasShadow ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '';
    }

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

    // Active nav link highlighting via IntersectionObserver
    if ('IntersectionObserver' in window) {
        const sections = document.querySelectorAll('.section[id]');

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
        }, {
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        });

        sections.forEach(function(section) {
            observer.observe(section);
        });
    }

})();

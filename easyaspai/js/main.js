/* easyaspai — main.js */

(function () {
    'use strict';

    // ── Sticky header shadow on scroll ──────────────────
    const header = document.getElementById('header');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ── Mobile nav toggle ────────────────────────────────
    const toggle = document.getElementById('navToggle');
    const nav    = document.getElementById('nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            toggle.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', String(open));
        });

        // Close on nav link click
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on outside click
        document.addEventListener('click', e => {
            if (!header.contains(e.target)) {
                nav.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ── Smooth scroll for anchor links ──────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = header ? header.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ── Waitlist form ────────────────────────────────────
    const form    = document.getElementById('waitlistForm');
    const success = document.getElementById('formSuccess');
    if (form && success) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const nameEl  = form.querySelector('[name="name"]');
            const emailEl = form.querySelector('[name="email"]');
            let valid = true;

            [nameEl, emailEl].forEach(el => {
                if (!el) return;
                el.style.borderColor = '';
                if (!el.value.trim() || (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value))) {
                    el.style.borderColor = '#C41230';
                    valid = false;
                }
            });

            if (!valid) return;

            // Simulate submission — replace with real endpoint
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.disabled  = true;
                btn.textContent = 'Joining…';
            }

            setTimeout(() => {
                form.querySelector('.form-row').style.display = 'none';
                form.querySelector('.form-note').style.display = 'none';
                success.hidden = false;
            }, 900);
        });
    }
})();

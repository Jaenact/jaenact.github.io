document.addEventListener('DOMContentLoaded', () => {
    // ====== 3D TILT EFFECT & SPOTLIGHT ======
    const heroCard = document.querySelector('.hero-card');
    const heroWrapper = document.querySelector('.hero-card-wrapper');
    const sections = document.querySelectorAll('.section');

    // Hero Card 3D Tilt
    if (heroWrapper && heroCard) {
        heroWrapper.addEventListener('mousemove', (e) => {
            const rect = heroWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            heroCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            
            // Internal Glow Movement
            const glow = heroCard.querySelector('.hero-card-glow');
            if (glow) {
                glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.4), transparent 70%)`;
            }
        });

        heroWrapper.addEventListener('mouseleave', () => {
            heroCard.style.transform = 'rotateX(5deg) rotateY(-10deg) scale(1)';
            const glow = heroCard.querySelector('.hero-card-glow');
            if (glow) {
                glow.style.background = `radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.2), transparent 70%)`;
            }
        });
        
        // Click to scroll
        heroCard.addEventListener('click', () => {
            const projects = document.getElementById('projects');
            if (projects) {
                const offset = 100;
                const top = projects.offsetTop - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    }

    // Interactive Spotlight on Glass Cards
    const glassCards = document.querySelectorAll('.glass-card, .cve-card, .project-card, .exp-card');
    
    glassCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%), rgba(255,255,255,0.02)`;
            card.style.borderColor = `rgba(255,255,255,0.15)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = '';
            card.style.borderColor = '';
        });
    });

    // ====== THEME TOGGLE ======
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            // View Transition API (Circular Reveal)
            if (!document.startViewTransition) {
                // Fallback
                html.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
                updateThemeIcon(next);
                return;
            }

            const x = e.clientX;
            const y = e.clientY;
            const endRadius = Math.hypot(
                Math.max(x, innerWidth - x),
                Math.max(y, innerHeight - y)
            );

            const transition = document.startViewTransition(() => {
                html.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
                updateThemeIcon(next);
            });

            transition.ready.then(() => {
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0px at ${x}px ${y}px)`,
                            `circle(${endRadius}px at ${x}px ${y}px)`
                        ]
                    },
                    {
                        duration: 500,
                        easing: "ease-in-out",
                        pseudoElement: "::view-transition-new(root)"
                    }
                );
            });
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
    }

    // ====== TYPING EFFECT ======
    const typingElement = document.getElementById('typingText');
    if (typingElement) {
        const phrases = [
            'Analyzing Systems',
            'Discovering CVEs',
            'Securing the Future'
        ];
        let pIndex = 0, cIndex = 0, isDeleting = false;
        
        function type() {
            const currentPhrase = phrases[pIndex];
            const speed = isDeleting ? 40 : 80;
            
            if (!isDeleting && cIndex <= currentPhrase.length) {
                typingElement.textContent = currentPhrase.substring(0, cIndex++);
            } else if (isDeleting && cIndex >= 0) {
                typingElement.textContent = currentPhrase.substring(0, cIndex--);
            }
            
            if (cIndex === currentPhrase.length + 1) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
            
            if (cIndex === 0 && isDeleting) {
                isDeleting = false;
                pIndex = (pIndex + 1) % phrases.length;
            }
            
            setTimeout(type, speed);
        }
        type();
    }

    // ====== STAGGERED SCROLL ANIMATION ======
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Staggered animation for children if it's a grid/list
                if (entry.target.classList.contains('projects-grid') || 
                    entry.target.classList.contains('activities-list') || 
                    entry.target.classList.contains('cve-grid')) {
                    
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('active');
                        }, index * 100); // 100ms delay per item
                    });
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .projects-grid, .activities-list, .cve-grid').forEach(el => observer.observe(el));

    // ====== STICKY NAV BLUR ======
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'var(--nav-bg)';
            nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = 'transparent'; // Clean look at top
            nav.style.boxShadow = 'none';
        }
    });

    // ====== SMOOTH SCROLL ======
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    // ====== COPY MAIL & TOAST ======
    const copyEmailBtn = document.getElementById('copyEmail');
    const emailText = document.getElementById('emailText');
    const toast = document.getElementById('toast');

    if (copyEmailBtn && emailText && toast) {
        copyEmailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(emailText.innerText).then(() => {
                showToast();
            });
        });
    }

    function showToast() {
        // Reset animation
        toast.classList.remove('show');
        void toast.offsetWidth; // Trigger reflow
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // ====== SPOTLIGHT EFFECT (Magic Glass) ======
    const spotlightCards = document.querySelectorAll('.glass-card');
    
    document.addEventListener('mousemove', (e) => {
        spotlightCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ====== MAGNETIC BUTTONS ======
    const magneticBtns = document.querySelectorAll('.magnetic-btn, .btn-primary, .social-icon');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Magnetic Pull Strength
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // ====== 3D TILT & GLARE ======
    const cards = document.querySelectorAll('.project-card, .activity-item');
    
    // Add Glare Elements dynamically
    cards.forEach(card => {
        let glare = card.querySelector('.glare');
        if (!glare) {
            glare = document.createElement('div');
            glare.classList.add('glare');
            card.appendChild(glare);
        }
    });

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Tilt
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            
            // Glare Position & Opacity
            const glare = card.querySelector('.glare');
            if(glare) {
                glare.style.opacity = '1';
                glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4) 0%, transparent 70%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            const glare = card.querySelector('.glare');
            if(glare) glare.style.opacity = '0';
        });
    });

    // ====== SCROLL SPY & ELASTIC SLIDER (FIXED) ======
    const navContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    let slider = document.querySelector('.nav-slider');

    if (!slider && navContainer) {
        slider = document.createElement('div');
        slider.classList.add('nav-slider');
        navContainer.appendChild(slider);
    }

    function moveSlider(target) {
        if (!target || !slider) return;
        
        const left = target.offsetLeft;
        const top = target.offsetTop;
        const width = target.offsetWidth;
        const height = target.offsetHeight;
        
        slider.style.opacity = '1';
        slider.style.width = `${width}px`;
        slider.style.height = `${height}px`;
        slider.style.transform = `translate(${left}px, ${top}px)`;
    }

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => moveSlider(e.target));
    });

    navContainer.addEventListener('mouseleave', () => {
        const active = document.querySelector('.nav-links a.active');
        if (active) moveSlider(active);
        else slider.style.opacity = '0';
    });
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 300)) current = section.getAttribute('id');
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) link.classList.add('active');
        });

        const activeLink = document.querySelector('.nav-links a.active');
        if (activeLink) moveSlider(activeLink);
    });

    setTimeout(() => {
        const active = document.querySelector('.nav-links a.active');
        if (active) moveSlider(active);
    }, 100);


    // ====== LENIS SMOOTH SCROLL (Momentum) ======
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ====== FLUID CUSTOM CURSOR ======
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Dot moves instantly
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
            
            // Show cursor on first move
            cursorDot.style.display = 'block';
            cursorOutline.style.display = 'block';
        });

        const animateCursor = () => {
            // Lerp for smooth following
            outlineX += (mouseX - outlineX) * 0.15; // Speed factor
            outlineY += (mouseY - outlineY) * 0.15;

            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;

            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Magnetic Interactions
        const links = document.querySelectorAll('a, button, .magnetic-btn');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                document.body.classList.add('hovering-link');
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            link.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovering-link');
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
});

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
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateThemeIcon(next);
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

    // ====== SCROLL ANIMATION ======
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

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
});

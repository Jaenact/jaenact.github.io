document.addEventListener('DOMContentLoaded', () => {
    // ====== DARK MODE TOGGLE ======
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'light' ? 'ph ph-moon' : 'ph ph-sun';
    }

    // ====== SCROLL PROGRESS BAR ======
    const scrollProgress = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        scrollProgress.style.width = scrollPercent + '%';
    });

    // ====== SMOOTH SCROLL NAVIGATION ======
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ====== TYPING EFFECT ======
    const typingElement = document.getElementById('typingText');
    const phrases = [
        '보안 문제 해결과 시스템 분석을 중심으로',
        'CTF 대회와 해킹 방어를 연구하며',
        '시스템 보안과 취약점 분석에 몰두하며'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at end of phrase
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing effect
    setTimeout(type, 1000);

    // ====== SCROLL REVEAL ANIMATION ======
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // ====== 3D TILT EFFECT ======
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // ====== MAGNETIC EFFECT ======
    const magneticItems = document.querySelectorAll('.magnetic-btn, .magnetic-item, .magnetic-link, .magnetic-card');

    magneticItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            item.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translate(0, 0)';
        });
    });

    // ====== COPY EMAIL FUNCTIONALITY ======
    const copyEmailBtn = document.getElementById('copyEmail');
    const emailText = document.getElementById('emailText').textContent;
    const toast = document.getElementById('toast');

    copyEmailBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(emailText);
            showToast('이메일이 복사되었습니다!');
        } catch (err) {
            showToast('복사에 실패했습니다', 'error');
        }
    });

    function showToast(message, type = 'success') {
        const toastMessage = document.getElementById('toastMessage');
        const toastIcon = toast.querySelector('i');

        toastMessage.textContent = message;

        if (type === 'success') {
            toastIcon.className = 'ph ph-check-circle';
        } else {
            toastIcon.className = 'ph ph-warning-circle';
        }

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // ====== PROJECT MODAL ======
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');

    const projectData = {
        1: {
            title: 'Security Research',
            description: '보안 취약점 분석 및 연구 내용을 정리한 저장소입니다. 웹 보안, 시스템 분석 등 다양한 분야의 연구 결과물을 기록하고 있습니다.',
            tech: ['Python', 'Security', 'Research'],
            link: 'https://github.com/Jaenact',
            features: [
                '웹 애플리케이션 취약점 분석',
                '시스템 보안 연구',
                '자동화 도구 개발',
                '학습 노트 및 기록'
            ]
        },
        2: {
            title: 'CTF Writeups',
            description: '참여한 CTF 대회의 풀이 및 학습 기록입니다. 다양한 문제를 해결하면서 얻은 인사이트와 기술을 공유합니다.',
            tech: ['Writeups', 'CTF', 'Pwn', 'Web'],
            link: 'https://github.com/Jaenact',
            features: [
                'CTF 대회 참가 기록',
                '문제 풀이 과정 상세 설명',
                '사용한 기법 및 도구',
                '학습한 취약점 정리'
            ]
        },
        3: {
            title: 'Security Tools',
            description: '보안 분석을 위한 자동화 도구 모음입니다. 반복적인 작업을 자동화하고 효율성을 높이기 위해 개발한 도구들입니다.',
            tech: ['Python', 'Automation', 'Tools'],
            link: 'https://github.com/Jaenact',
            features: [
                '취약점 스캐너',
                '자동화 스크립트',
                '분석 도구',
                '데이터 파싱 유틸리티'
            ]
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projectData[projectId];

            if (project) {
                modalBody.innerHTML = `
                    <h2 style="font-size: 2rem; margin-bottom: 16px; color: var(--text-primary);">${project.title}</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 1.1rem;">${project.description}</p>
                    
                    <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--text-primary);">기술 스택</h3>
                    <div style="display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap;">
                        ${project.tech.map(t => `<span style="padding: 6px 12px; background: var(--bg-grey); border-radius: 16px; font-size: 0.9rem; color: var(--text-secondary);">${t}</span>`).join('')}
                    </div>
                    
                    <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--text-primary);">주요 기능</h3>
                    <ul style="list-style: none; padding: 0; margin-bottom: 24px;">
                        ${project.features.map(f => `<li style="padding: 8px 0; color: var(--text-secondary); display: flex; align-items: center; gap: 8px;"><i class="ph ph-check" style="color: var(--accent-blue);"></i>${f}</li>`).join('')}
                    </ul>
                    
                    <a href="${project.link}" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--accent-blue); color: white; border-radius: 12px; font-weight: 600; text-decoration: none;">
                        <i class="ph ph-github-logo"></i> GitHub에서 보기
                    </a>
                `;

                modal.classList.add('show');
            }
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
});

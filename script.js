// Yıldızları oluştur
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Partikülleri oluştur
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Elementleri animasyonla göster
function animateElements() {
    const elements = document.querySelectorAll('[data-delay]');
    
    elements.forEach(element => {
        const delay = parseFloat(element.dataset.delay);
        setTimeout(() => {
            element.style.animationDelay = '0s';
            element.classList.add('fade-up');
        }, delay * 1000);
    });
}

// Scroll efekti
function handleScroll() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.stars');
    if (parallax) {
        parallax.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
    }
}

// Kalp animasyonunu gecikmeli başlat
function startHeartAnimation() {
    const heart = document.querySelector('.heart-beat');
    if (heart) {
        setTimeout(() => {
            heart.style.opacity = '1';
        }, 4000);
    }
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createParticles();
    animateElements();
    startHeartAnimation();
});

// Scroll olayını dinle
window.addEventListener('scroll', handleScroll);

// Mouse hareketi ile hafif parallax efekti
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const speed = (index % 3 + 1) * 0.5;
        particle.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
});

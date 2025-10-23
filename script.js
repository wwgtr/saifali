// Spider Web Canvas Animation
function initSpiderWeb() {
    const canvas = document.getElementById('spiderWeb');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.fillStyle = `rgba(233, 69, 96, 0.5)`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.strokeStyle = `rgba(233, 69, 96, ${0.2 * (1 - distance / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawLines();
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for Fade-in Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all content articles
    document.querySelectorAll('.content-article').forEach(article => {
        observer.observe(article);
    });
    
    // Observe source items
    document.querySelectorAll('.source-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe media cards
    document.querySelectorAll('.media-card').forEach(card => {
        observer.observe(card);
    });
}

// Add Hover Effects to Interactive Elements
function initHoverEffects() {
    const interactiveElements = document.querySelectorAll(
        '.cta-button, .source-link, .download-btn, .toc-link, .social-link'
    );
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform || 'translateY(0)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Add Blur Effect on Scroll
function initBlurEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backdropFilter = 'blur(15px)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        }
    });
}

// Add Parallax Effect
function initParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (hero) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
}

// Add Mouse Follow Effect for Cards
function initMouseFollowEffect() {
    const cards = document.querySelectorAll('.source-item, .media-card, .content-article');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Add Ripple Effect on Click
function initRippleEffect() {
    const buttons = document.querySelectorAll('.cta-button, .source-link, .download-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add CSS for Ripple Effect
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .cta-button, .source-link, .download-btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: rippleAnimation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes rippleAnimation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add Loading Animation
function initLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
}

// Initialize Scroll Animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => observer.observe(element));
}

// Add Glow Effect on Hover
function initGlowEffect() {
    const glowElements = document.querySelectorAll('.media-icon, .source-number');
    
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 20px rgba(233, 69, 96, 0.8))';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 10px rgba(233, 69, 96, 0.4))';
        });
    });
}

// Initialize All Functions
document.addEventListener('DOMContentLoaded', () => {
    initSpiderWeb();
    initSmoothScroll();
    initIntersectionObserver();
    initHoverEffects();
    initBlurEffect();
    initParallax();
    initMouseFollowEffect();
    initRippleEffect();
    addRippleStyles();
    initLoadingAnimation();
    initScrollAnimations();
    initGlowEffect();
    
    // Add initial opacity
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle Visibility Change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('.media-icon').forEach(icon => {
            icon.style.animationPlayState = 'paused';
        });
    } else {
        document.querySelectorAll('.media-icon').forEach(icon => {
            icon.style.animationPlayState = 'running';
        });
    }
});


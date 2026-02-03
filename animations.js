/* ============================================
   DRONEAGRO - ANIMATIONS.JS PREMIUM
   Archivo principal de animaciones e interacciones mejoradas
   ============================================ */

// Añadir clase al body para indicar que JS está activo
document.body.classList.add('js-enabled');

/* ============================================
   HERO CAROUSEL - Carrusel automático de imágenes
   ============================================ */
class HeroCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.currentSlide = 0;
        this.visibleTime = 2700; // Tiempo visible real
        this.transitionTime = 600; // Tiempo de fade
        this.isTransitioning = false;
        this.firstTransitionDone = false;
        
        if (this.slides.length > 1) {
            this.init();
        }
    }
    
    init() {
        // Iniciar el carrusel automático
        this.startAutoplay();
        
        // Pausar solo al pasar el cursor sobre las imágenes
        const carousel = document.querySelector('.hero-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
            carousel.addEventListener('mouseleave', () => this.startAutoplay());
        }
        
        // Pausar cuando la página no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoplay();
            } else {
                this.startAutoplay();
            }
        });
    }
    
    nextSlide() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        const currentSlideElement = this.slides[this.currentSlide];
        
        // Calcular el siguiente slide
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        const nextSlideElement = this.slides[this.currentSlide];
        
        // Animación de salida del slide actual
        currentSlideElement.classList.add('fade-out');
        
        // Después de un pequeño delay, mostrar el siguiente slide
        setTimeout(() => {
            currentSlideElement.classList.remove('active', 'fade-out');
            nextSlideElement.classList.add('active');
            this.isTransitioning = false;
        }, this.transitionTime);
    }
    
    startAutoplay() {
        this.pauseAutoplay(); // Limpiar intervalo previo
        if (!this.firstTransitionDone) {
            setTimeout(() => {
                this.nextSlide();
                this.firstTransitionDone = true;
                this.autoplayInterval = setInterval(() => {
                    this.nextSlide();
                }, this.visibleTime + this.transitionTime);
            }, 1000); // Primer cambio tras 1 segundo
        } else {
            this.autoplayInterval = setInterval(() => {
                this.nextSlide();
            }, this.visibleTime + this.transitionTime);
        }
    }
    
    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    // Método público para cambiar la velocidad
    setSpeed(newSpeed) {
        this.slideInterval = newSpeed;
        if (this.autoplayInterval) {
            this.startAutoplay();
        }
    }
}

// Inicializar el carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.heroCarousel = new HeroCarousel();
});

/* ============================================
   LOADING ANIMATION INICIAL
   ============================================ */
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        }, 800);
    }
});

/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);

/* ============================================
   BACK TO TOP BUTTON
   ============================================ */
function initBackToTop() {
    let backToTopBtn = document.querySelector('.back-to-top');
    
    // Crear el botón si no existe
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.setAttribute('aria-label', 'Volver arriba');
        document.body.appendChild(backToTopBtn);
    }
    
    // Mostrar/ocultar según scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Click para volver arriba
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ============================================
   ANIMACIONES AL SCROLL CON INTERSECTION OBSERVER
   ============================================ */
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if (!elements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Agregar delay basado en el índice
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    
                    // Efecto de rebote para elementos especiales
                    if (entry.target.classList.contains('bounce-effect')) {
                        entry.target.style.animation = 'subtleBounce 0.6s ease-out';
                    }
                }, index * 100);
                
                // Dejar de observar una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => observer.observe(element));
}

// Agregar animación de rebote
if (!document.querySelector('#scroll-animation-styles')) {
    const style = document.createElement('style');
    style.id = 'scroll-animation-styles';
    style.textContent = `
        @keyframes subtleBounce {
            0%, 100% { transform: translateY(0) translateX(0) scale(1); }
            25% { transform: translateY(-8px) scale(1.03); }
            50% { transform: translateY(0) scale(0.98); }
            75% { transform: translateY(-3px) scale(1.01); }
        }
    `;
    document.head.appendChild(style);
}

/* ============================================
   CONTADORES ANIMADOS
   ============================================ */

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (!target) return;
        
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        let hasAnimated = false;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

/* ============================================
   NAVEGACIÓN SUAVE
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            const navLinks = document.querySelector('.nav_links');
            const menuToggle = document.querySelector('.menu-toggle');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
            
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================
   MENÚ HAMBURGUESA
   ============================================ */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav_links');

if (menuToggle && navLinks) {
    let menuAnimating = false;
    const MENU_ANIMATION_TIMEOUT = 500; // ms fallback

    const onNavTransitionEnd = (e) => {
        // listen for max-height or opacity to consider the animation finished
        if (e.propertyName === 'max-height' || e.propertyName === 'opacity') {
            menuAnimating = false;
            navLinks.removeEventListener('transitionend', onNavTransitionEnd);
        }
    };

    menuToggle.addEventListener('click', (e) => {
        if (menuAnimating) return; // ignore rapid clicks
        menuAnimating = true;

        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Resolve animation state on transition end, with a fallback timeout
        navLinks.addEventListener('transitionend', onNavTransitionEnd);
        setTimeout(() => {
            if (menuAnimating) {
                menuAnimating = false;
                navLinks.removeEventListener('transitionend', onNavTransitionEnd);
            }
        }, MENU_ANIMATION_TIMEOUT);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (menuAnimating) return;
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (menuAnimating) return;
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

/* ============================================
   HEADER DINÁMICO AL SCROLL
   ============================================ */

let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (!header) return;
    
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    if (currentScroll > lastScroll && currentScroll > 500) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

/* ============================================
   EFECTO PARALLAX - DESACTIVADO para mejor performance
   ============================================ */

// Parallax desactivado para scroll suave y mejor experiencia visual
// Si deseas reactivarlo, descomenta la función parallaxEffect() y el event listener

/*
function parallaxEffect() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    
    const scrolled = window.pageYOffset;
    const video = hero.querySelector('.hero-video');
    const content = hero.querySelector('.hero-content');
    
    if (scrolled < window.innerHeight) {
        if (video) {
            video.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
        
        if (content) {
            content.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
            content.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    }
}

window.addEventListener('scroll', parallaxEffect);
*/

/* ============================================
   FORMULARIO DE CONTACTO
   ============================================ */

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formMessage = document.getElementById('form-message');
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono')?.value.trim() || '';
        const servicio = document.getElementById('servicio')?.value || '';
        const mensaje = document.getElementById('mensaje').value.trim();
        
        if (!nombre || !email || !mensaje) {
            showFormMessage(formMessage, 'Por favor, completa todos los campos requeridos.', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage(formMessage, 'Por favor, ingresa un email válido.', 'error');
            return;
        }
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        
        setTimeout(() => {
            showFormMessage(formMessage, '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.', 'success');
            
            contactForm.reset();
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            
            console.log('Formulario enviado:', { nombre, email, telefono, servicio, mensaje });
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    });
}

function showFormMessage(element, message, type) {
    if (!element) return;
    
    element.textContent = message;
    element.style.display = 'block';
    element.style.padding = '15px';
    element.style.marginTop = '20px';
    element.style.borderRadius = '8px';
    element.style.fontSize = '14px';
    
    if (type === 'success') {
        element.style.backgroundColor = '#d4edda';
        element.style.color = '#155724';
        element.style.border = '1px solid #c3e6cb';
    } else {
        element.style.backgroundColor = '#f8d7da';
        element.style.color = '#721c24';
        element.style.border = '1px solid #f5c6cb';
    }
}

/* ============================================
   TEXTO ROTATIVO
   ============================================ */

/* ============================================
   TEXTO ROTATIVO MEJORADO - SIN BUGS
   ============================================ */
function rotatingText() {
    const container = document.querySelector('.rotating-text-container');
    if (!container) return;
    
    const textElements = container.querySelectorAll('.rotating-text span');
    if (!textElements.length) return;
    
    let currentIndex = 0;
    let intervalId = null;
    let isVisible = true;
    
    // Inicializar: ocultar todos excepto el primero
    textElements.forEach((el, index) => {
        el.style.opacity = index === 0 ? '1' : '0';
        el.style.transform = index === 0 ? 'translateY(0)' : 'translateY(100%)';
        el.style.position = 'absolute';
        el.style.left = '0';
        el.style.top = '0';
        el.style.width = '100%';
    });
    
    function rotateToNext() {
        if (!isVisible) return;
        
        // Ocultar el actual: sale hacia arriba
        textElements[currentIndex].style.opacity = '0';
        textElements[currentIndex].style.transform = 'translateY(-100%)';
        
        // Calcular el siguiente índice
        currentIndex = (currentIndex + 1) % textElements.length;
        
        // Preparar el siguiente desde abajo
        textElements[currentIndex].style.transform = 'translateY(100%)';
        textElements[currentIndex].style.opacity = '0';
        
        // Mostrar el siguiente: entra desde abajo
        setTimeout(() => {
            textElements[currentIndex].style.opacity = '1';
            textElements[currentIndex].style.transform = 'translateY(0)';
        }, 400);
    }
    
    // Usar IntersectionObserver para pausar cuando no está visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isVisible = entry.isIntersecting;
            
            if (isVisible && !intervalId) {
                // Reiniciar la animación cuando vuelve a ser visible
                intervalId = setInterval(rotateToNext, 3000);
            } else if (!isVisible && intervalId) {
                // Pausar cuando no está visible
                clearInterval(intervalId);
                intervalId = null;
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(container);
    
    // Iniciar la animación
    intervalId = setInterval(rotateToNext, 3000);
    
    // Limpiar el intervalo cuando se descarga la página
    window.addEventListener('beforeunload', () => {
        if (intervalId) clearInterval(intervalId);
    });
}

/* ============================================
   INDICADOR DE SCROLL
   ============================================ */

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
    
    scrollIndicator.addEventListener('click', () => {
        const nextSection = document.getElementById('stats');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/* ============================================
   ANIMACIÓN DE PORCENTAJES
   ============================================ */

function animatePercentages() {
    const percentages = document.querySelectorAll('.percentage-bar');
    
    percentages.forEach(bar => {
        const target = parseInt(bar.getAttribute('data-percentage'));
        if (!target) return;
        
        let hasAnimated = false;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    bar.style.width = target + '%';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
}

/* ============================================
   FAQ ACCORDION
   ============================================ */

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (!faqItems.length) return;
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) return;
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
            
            if (!isActive) {
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = 'faqExpand 0.4s ease';
                }, 10);
            }
        });
    });
}

if (!document.querySelector('#faq-dynamic-styles')) {
    const style = document.createElement('style');
    style.id = 'faq-dynamic-styles';
    style.textContent = `
        @keyframes faqExpand {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

/* ============================================
   UTILIDADES
   ============================================ */

function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   INICIALIZACIÓN
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Crear progress bar si no existe
    if (!document.querySelector('.scroll-progress')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.prepend(progressBar);
    }
    
    // Inicializar todas las funciones
    animateOnScroll();
    animateCounters();
    animatePercentages();
    rotatingText();
    initFAQAccordion();
    initBackToTop();
    
    // Parallax suave en el hero
    const hero = document.getElementById('hero');
    if (hero) {
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const video = hero.querySelector('.hero-video');
            const content = hero.querySelector('.hero-content');
            
            if (video && scrolled < window.innerHeight) {
                video.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
            }
            if (content && scrolled < window.innerHeight) {
                content.style.transform = `translateY(${scrolled * 0.3}px)`;
                content.style.opacity = 1 - (scrolled / 600);
            }
        }, 10));
    }
    
    document.body.classList.add('loaded');
    
    // Hacer clickeables las tarjetas de servicios en móviles
    const servicioCards = document.querySelectorAll('.servicio-card');
    servicioCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Evitar doble navegación si ya se hizo clic en el enlace
            if (e.target.tagName === 'A') return;
            
            const link = this.querySelector('.btn-link');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
        
        // Mejorar accesibilidad
        card.setAttribute('role', 'link');
        card.setAttribute('tabindex', '0');
        
        // Permitir navegación con teclado
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.btn-link');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
    });
    
    console.log('🚁 DroneAgro - Sitio web premium cargado correctamente');
    console.log('✨ Efectos premium activos: glassmorphism, hexágonos, gradientes');
});

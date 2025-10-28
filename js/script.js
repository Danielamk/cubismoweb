// Smooth scrolling para los enlaces internos
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Configurar smooth scrolling solo para enlaces internos con anchors
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efectos de parallax suave para el banner y elementos del hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBanner = document.querySelector('.hero-banner-image');
        const heroCard = document.querySelector('.hero-front-image');
        
        if (heroCard) {
            const cardSpeed = 0.3;
            const cardYPos = -(scrolled * cardSpeed);
            heroCard.style.transform = `translateY(${cardYPos}px)`;
        }
        
        if (heroCard) {
            const bannerSpeed = 0.1;
            const bannerYPos = scrolled * bannerSpeed;
            heroCard.style.transform += ` scale(${1 - scrolled * 0.0001})`;
        }
    });

    // Animación de entrada para elementos cuando entran en viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos que necesitan animación
    const animatedElements = document.querySelectorAll('.editorial-card, .editorial-quote, .press-logos, .cta-title, .section-header, .content-title, .origins-title, .phases-title, .phase-card, .highlight-quote, .final-title, .artist-image-container, .artist-text-column, .hero-banner-title, .artists-quote, .obras-hero-title, .obras-hero-subtitle');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add background opacity based on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(245, 241, 232, 0.98)';
        } else {
            navbar.style.background = 'rgba(245, 241, 232, 0.95)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Efecto de typing para el título principal (opcional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Activar efecto typing para el título principal después de un delay
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 150);
        }
    }, 500);

    // Animación sutil para los logos de prensa
    const logos = document.querySelectorAll('.logo');
    
    logos.forEach((logo, index) => {
        setTimeout(() => {
            logo.style.opacity = '0.7';
            logo.style.transform = 'translateY(0)';
        }, index * 100);
        
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(20px)';
        logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Cursor personalizado para botones (efecto sutil)
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'pointer';
        });
        
        button.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'default';
        });
    });

    // Efectos adicionales para los enlaces de museos
    const museumLinks = document.querySelectorAll('.logo');
    
    museumLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Efecto de click para feedback visual
        link.addEventListener('click', function(e) {
            this.style.transform = 'translateY(-2px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            }, 150);
        });
    });

    // Efectos para las tarjetas editoriales
    const editorialCards = document.querySelectorAll('.editorial-card');
    
    editorialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Slight rotation effect on hover
            this.style.transform = 'translateY(-10px) rotate(0.5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
        
        // Click effect for cards
        card.addEventListener('click', function() {
            const link = this.querySelector('.card-cta');
            if (link) {
                link.click();
            }
        });
    });

    // Staggered animation for cards
    const cards = document.querySelectorAll('.editorial-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Efectos para las formas geométricas
    const geoShapes = document.querySelectorAll('.geo-shape');
    geoShapes.forEach((shape, index) => {
        shape.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        shape.addEventListener('mouseleave', function() {
            const baseTransform = this.classList.contains('shape-cube') ? 'rotate(15deg)' :
                                 this.classList.contains('shape-triangle') ? 'rotate(-20deg)' :
                                 'translateX(-50%)';
            this.style.transform = baseTransform;
        });
        
        // Animación de aparición escalonada
        setTimeout(() => {
            shape.style.opacity = '0.8';
            shape.style.transform += ' translateY(0)';
        }, index * 200);
        
        shape.style.opacity = '0';
        shape.style.transform += ' translateY(20px)';
        shape.style.transition = 'all 0.5s ease';
    });

    // Efectos para las tarjetas de fases
    const phaseCards = document.querySelectorAll('.phase-card');
    phaseCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.phase-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.phase-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Parallax suave para el hero de introducción
            const introHeroBg = document.querySelector('.intro-hero-bg');
    if (introHeroBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const introSection = document.querySelector('.intro-cubismo');
            
            if (introSection) {
                const sectionTop = introSection.offsetTop;
                const sectionHeight = introSection.offsetHeight;
                
                if (scrolled >= sectionTop && scrolled <= sectionTop + sectionHeight) {
                    const parallaxSpeed = 0.5;
                    const yPos = (scrolled - sectionTop) * parallaxSpeed;
                    introHeroBg.style.transform = `translateY(${yPos}px)`;
                }
            }
        });
    }

    // Efectos específicos para artistas
    const artistImages = document.querySelectorAll('.artist-image-container');
    
    artistImages.forEach((container, index) => {
        // Staggered animation
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, index * 200);
        
        // Hover effect enhancements
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        container.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efectos para los badges de artistas
    const artistBadges = document.querySelectorAll('.artist-badge');
    
    artistBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.background = 'var(--orange)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'var(--terracota)';
        });
    });

    // Typing effect para nombres de artistas
    const artistNames = document.querySelectorAll('.artist-name');
    
    artistNames.forEach((name, index) => {
        setTimeout(() => {
            name.style.opacity = '1';
            name.style.transform = 'translateX(0)';
        }, (index + 1) * 300);
        
        name.style.opacity = '0';
        name.style.transform = 'translateX(-20px)';
        name.style.transition = 'all 0.6s ease';
    });

    // Modal functionality - Single reusable modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('artModal');
    const modalClose = document.querySelector('.modal-close');
    
    // Elements to populate with data
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalYear = document.getElementById('modal-year');
    const modalArtist = document.getElementById('modal-artist');
    const modalDesc = document.getElementById('modal-desc');

    // Open modal function
    function openModal(title, year, artist, desc, imgSrc) {
        // Populate modal content
        modalTitle.textContent = title;
        modalYear.textContent = year;
        modalArtist.textContent = artist;
        modalDesc.textContent = desc;
        modalImg.src = imgSrc;
        modalImg.alt = title;
        
        // Show modal
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Add is-open class for animations
            requestAnimationFrame(() => {
                modal.classList.add('is-open');
            });
        }
    }

    // Close modal function
    function closeModal() {
        if (modal) {
            modal.classList.remove('is-open');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 400); // Match CSS transition duration
        }
    }

    // Gallery item click handlers
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const year = this.getAttribute('data-year');
            const artist = this.getAttribute('data-artist');
            const desc = this.getAttribute('data-desc');
            const imgSrc = this.getAttribute('data-img');
            
            openModal(title, year, artist, desc, imgSrc);
        });
    });

    // Close modal - close button
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal - click outside (overlay)
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Close modal - ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.is-open');
            if (activeModal) {
                closeModal();
            }
        }
    });

    // Gallery item hover effects enhancement
    const galleryImages = document.querySelectorAll('.gallery-item');
    
    galleryImages.forEach((item, index) => {
        // Staggered entrance animation
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 150);
        
        item.style.opacity = '0';
        item.style.transform = 'translateY(40px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        // Enhanced hover effects
        item.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
            // Add subtle rotation on hover
            this.style.transform = 'translateY(-12px) scale(1.02) rotate(0.5deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });

    // Geometric shapes animation trigger
    const shapes = document.querySelectorAll('.geometric-shapes > div');
    
    shapes.forEach((shape, index) => {
        setTimeout(() => {
            shape.style.opacity = shape.style.opacity || '0.08';
        }, index * 500);
        
        shape.style.opacity = '0';
        shape.style.transition = 'opacity 1s ease';
    });

    // Parallax effect for decorative shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.geometric-shapes > div');
        
        shapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = scrolled * speed;
            shape.style.transform += ` translateY(${yPos}px)`;
        });
    });

    // Lazy loading for modal images (performance improvement)
    const modalImages = document.querySelectorAll('.modal-image img');
    
    modalImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });    // Cambio de color de fondo basado en scroll (opcional)
    window.addEventListener('scroll', function() {
        const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        
        if (scrollPercent > 0.8) {
            document.body.style.background = 'linear-gradient(to bottom, var(--cream), var(--beige))';
        } else {
            document.body.style.background = 'var(--cream)';
        }
    });
});

// Preloader y carga progresiva de imágenes
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Mostrar contenido con animación suave
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
    
    // Cargar imágenes progresivamente
    const images = document.querySelectorAll('.hero-front-image, .hero-banner-image');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});

// Responsive menu functionality (para futuras expansiones)
function toggleMobileMenu() {
    // Función para implementar menú móvil si se añade navegación
    console.log('Mobile menu toggle - ready for implementation');
}

// Función para cambiar dinámicamente los colores de acento
function changeAccentColor(color) {
    document.documentElement.style.setProperty('--accent-color', color);
}

// Easter egg: cambio de colores al hacer triple click en el título
let clickCount = 0;
const heroTitle = document.querySelector('.hero-title');

if (heroTitle) {
    heroTitle.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 3) {
            // Cambiar a una paleta alternativa
            document.documentElement.style.setProperty('--terracota', '#8B5A3C');
            document.documentElement.style.setProperty('--olive', '#6B5B73');
            
            setTimeout(() => {
                // Volver a los colores originales
                document.documentElement.style.setProperty('--terracota', '#C65D5A');
                document.documentElement.style.setProperty('--olive', '#7A8B5C');
                clickCount = 0;
            }, 2000);
        }
        
        setTimeout(() => {
            if (clickCount < 3) clickCount = 0;
        }, 1000);
    });

    // ===== FUNCIONALIDAD DE CONTACTO =====
    
    // Inicializar EmailJS (opcional - comentado por defecto)
    // if (typeof emailjs !== 'undefined') {
    //     emailjs.init('YOUR_PUBLIC_KEY');
    // }

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn?.querySelector('.btn-text');
        const btnArrow = submitBtn?.querySelector('.btn-arrow');
        const btnSpinner = submitBtn?.querySelector('.btn-spinner');
        const formMessage = document.getElementById('form-message');

        // Validación en tiempo real
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });

        // Función de validación de campo
        function validateField(e) {
            const field = e.target;
            const errorElement = document.getElementById(field.id + '-error');
            let isValid = true;
            let errorMessage = '';

            // Limpiar estados anteriores
            field.setAttribute('aria-invalid', 'false');
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.classList.remove('show');
            }

            // Validaciones específicas
            if (field.hasAttribute('required') && !field.value.trim()) {
                errorMessage = 'Este campo es obligatorio';
                isValid = false;
            } else if (field.type === 'email' && field.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    errorMessage = 'Por favor, ingresa un email válido';
                    isValid = false;
                }
            } else if (field.hasAttribute('minlength')) {
                const minLength = parseInt(field.getAttribute('minlength'));
                if (field.value.length < minLength) {
                    errorMessage = `Mínimo ${minLength} caracteres`;
                    isValid = false;
                }
            }

            // Mostrar error si existe
            if (!isValid) {
                field.setAttribute('aria-invalid', 'true');
                if (errorElement) {
                    errorElement.textContent = errorMessage;
                    errorElement.classList.add('show');
                }
            }

            return isValid;
        }

        // Limpiar error al escribir
        function clearFieldError(e) {
            const field = e.target;
            const errorElement = document.getElementById(field.id + '-error');
            
            if (field.value.trim()) {
                field.setAttribute('aria-invalid', 'false');
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            }
        }

        // Verificar honeypot
        function checkHoneypot() {
            const honeypot = contactForm.querySelector('input[name="company"]');
            return honeypot && honeypot.value.trim() === '';
        }

        // Mostrar mensaje
        function showMessage(message, type) {
            if (formMessage) {
                formMessage.textContent = message;
                formMessage.className = `form-message ${type} show`;
                
                setTimeout(() => {
                    formMessage.classList.remove('show');
                }, 5000);
            }
        }

        // Estados del botón
        function setButtonState(state) {
            if (!submitBtn) return;

            switch (state) {
                case 'loading':
                    submitBtn.disabled = true;
                    if (btnText) btnText.style.display = 'none';
                    if (btnArrow) btnArrow.style.display = 'none';
                    if (btnSpinner) btnSpinner.style.display = 'flex';
                    break;
                case 'success':
                    submitBtn.disabled = false;
                    if (btnText) {
                        btnText.textContent = '¡ENVIADO!';
                        btnText.style.display = 'inline';
                    }
                    if (btnArrow) {
                        btnArrow.textContent = '✓';
                        btnArrow.style.display = 'inline';
                    }
                    if (btnSpinner) btnSpinner.style.display = 'none';
                    
                    setTimeout(() => {
                        setButtonState('default');
                    }, 3000);
                    break;
                case 'error':
                case 'default':
                    submitBtn.disabled = false;
                    if (btnText) {
                        btnText.textContent = 'ENVIAR MENSAJE';
                        btnText.style.display = 'inline';
                    }
                    if (btnArrow) {
                        btnArrow.textContent = '→';
                        btnArrow.style.display = 'inline';
                    }
                    if (btnSpinner) btnSpinner.style.display = 'none';
                    break;
            }
        }

        // Envío del formulario
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Verificar honeypot
            if (!checkHoneypot()) {
                console.log('Spam detectado');
                return;
            }

            // Validar todos los campos
            let isFormValid = true;
            inputs.forEach(input => {
                if (!validateField({ target: input })) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                showMessage('Por favor, corrige los errores antes de enviar', 'error');
                return;
            }

            // Cambiar estado del botón
            setButtonState('loading');

            try {
                // Opción 1: Formspree (descomenta y agrega tu endpoint)
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    setButtonState('success');
                    showMessage('¡Tu mensaje fue enviado! Te responderé pronto.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Error en el servidor');
                }

                // Opción 2: EmailJS (descomenta y configura)
                /*
                await emailjs.sendForm(
                    'YOUR_SERVICE_ID',
                    'YOUR_TEMPLATE_ID',
                    contactForm
                );
                
                setButtonState('success');
                showMessage('¡Tu mensaje fue enviado! Te responderé pronto.', 'success');
                contactForm.reset();
                */

            } catch (error) {
                console.error('Error:', error);
                setButtonState('error');
                showMessage('Ocurrió un problema, intenta nuevamente.', 'error');
            }
        });

        // Animaciones de entrada para el formulario
        const formCard = document.querySelector('.contact-form-card');
        if (formCard) {
            setTimeout(() => {
                formCard.style.opacity = '1';
                formCard.style.transform = 'translateY(0)';
            }, 500);
            
            formCard.style.opacity = '0';
            formCard.style.transform = 'translateY(30px)';
            formCard.style.transition = 'all 0.8s ease';
        }
    }

    // Animaciones para las tarjetas sociales
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, (index + 1) * 200);
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.6s ease';
    });

    // Decoraciones geométricas para contacto
    const contactDecor = document.querySelectorAll('.contact-decor > div');
    contactDecor.forEach((shape, index) => {
        setTimeout(() => {
            shape.style.opacity = '0.1';
        }, index * 400);
        
        shape.style.opacity = '0';
        shape.style.transition = 'opacity 1s ease';
    });
}
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // NAVIGATION FUNCTIONALITY
    // ==========================================
    const controls = document.querySelectorAll(".control");
    const sections = document.querySelectorAll(".container");

    controls.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons and sections
            document.querySelector(".active-btn").classList.remove("active-btn");
            document.querySelector(".active").classList.remove("active");

            // Add active class to clicked button and corresponding section
            this.classList.add("active-btn");
            document.getElementById(button.dataset.id).classList.add("active");

            // Update URL hash without scrolling
            history.pushState(null, null, `#${button.dataset.id}`);
        });
    });


    // ==========================================
    // ACTIVE SECTION DETECTION ON SCROLL
    // ==========================================
    function updateActiveSection() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            controls.forEach(btn => {
                btn.classList.remove('active-btn');
                if (btn.dataset.id === current) {
                    btn.classList.add('active-btn');
                }
            });
        }
    }

    // Throttle scroll event for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function () {
            updateActiveSection();
        });
    });


    // ==========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Don't prevent default if it's just '#'
            if (targetId === '#') return;

            e.preventDefault();

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Remove active from all sections
                sections.forEach(s => s.classList.remove('active'));
                // Add active to target section
                targetSection.classList.add('active');

                // Update navigation buttons
                controls.forEach(btn => {
                    btn.classList.remove('active-btn');
                    if (btn.dataset.id === targetId.slice(1)) {
                        btn.classList.add('active-btn');
                    }
                });

                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // ==========================================
    // CONTACT FORM HANDLING
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showFormStatus('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormStatus('Please enter a valid email address.', 'error');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.querySelector('.btn-text').textContent;
            submitBtn.querySelector('.btn-text').textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                // OPTION 1: Using Formspree (replace with your endpoint)
                // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(formData)
                // });

                // OPTION 2: Using EmailJS (uncomment and configure)
                // Make sure to include EmailJS SDK in HTML:
                // <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
                /*
                emailjs.init('YOUR_PUBLIC_KEY');
                const response = await emailjs.send(
                    'YOUR_SERVICE_ID',
                    'YOUR_TEMPLATE_ID',
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: formData.subject,
                        message: formData.message
                    }
                );
                */

                // OPTION 3: Using Netlify Forms (if hosted on Netlify)
                // Just add: name="contact" data-netlify="true" to the <form> tag
                // and Netlify will handle it automatically

                // TEMPORARY SIMULATION (replace with actual implementation)
                await simulateFormSubmission(formData);

                // Show success message
                showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');

                // Reset form
                contactForm.reset();

            } catch (error) {
                console.error('Form submission error:', error);
                showFormStatus('Failed to send message. Please try again or email me directly at stojanovi.vs@gmail.com', 'error');
            } finally {
                // Restore button state
                submitBtn.querySelector('.btn-text').textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }


    // ==========================================
    // FORM STATUS DISPLAY
    // ==========================================
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }


    // ==========================================
    // SIMULATE FORM SUBMISSION (TEMPORARY)
    // Replace this with actual form service
    // ==========================================
    function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            console.log('Form data submitted:', data);

            // Simulate network delay
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve({ success: true });
                } else {
                    reject(new Error('Simulated network error'));
                }
            }, 1500);
        });
    }


    // ==========================================
    // LAZY LOADING IMAGES (Fallback for older browsers)
    // ==========================================
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        console.log('Native lazy loading supported');
    } else {
        // Fallback for browsers that don't support lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }


    // ==========================================
    // KEYBOARD ACCESSIBILITY
    // ==========================================
    // Add keyboard support for custom controls
    controls.forEach(control => {
        control.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });


    // ==========================================
    // HANDLE INITIAL HASH IN URL
    // ==========================================
    if (window.location.hash) {
        const initialSection = window.location.hash.slice(1);
        const targetControl = document.querySelector(`[data-id="${initialSection}"]`);

        if (targetControl) {
            setTimeout(() => {
                targetControl.click();
            }, 100);
        }
    }


    // ==========================================
    // THEME TOGGLE (Optional - uncomment to enable)
    // ==========================================
    /*
    const themeBtn = document.querySelector(".theme-btn");
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', currentTheme === 'light');
    
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            
            // Save theme preference
            const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
            localStorage.setItem('theme', theme);
        });
    }
    */


    // ==========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe portfolio items and timeline items for animation
    document.querySelectorAll('.portfolio-item, .timeline-item').forEach(item => {
        observer.observe(item);
    });


    // ==========================================
    // PERFORMANCE: Reduce animations on low-end devices
    // ==========================================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition-speed', '0s');
    }


    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    console.log('%c👋 Hello! Thanks for checking out my portfolio!',
        'color: #27AE60; font-size: 16px; font-weight: bold;');
    console.log('%cInterested in the code? Check it out on GitHub: https://github.com/igor-stojanov',
        'color: #FFFFFF; font-size: 12px;');

});


// ==========================================
// SERVICE WORKER REGISTRATION (Optional - for PWA)
// ==========================================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}
*/
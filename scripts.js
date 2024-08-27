document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animations
    gsap.from('.logo', {
        duration: 1.5,
        scale: 0.5,
        opacity: 0,
        ease: 'bounce.out',
        delay: 0.5,
        onComplete: () => {
            gsap.to('.logo', {
                duration: 1,
                scale: 1,
                ease: 'elastic.out(1, 0.3)'
            });
        }
    });

    gsap.from('header h1', {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: 'power3.out',
        delay: 1
    });

    gsap.from('nav ul li a', {
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease: 'power1.out',
        delay: 1.5
    });

    // Intro section animation
    gsap.from('#home .intro', {
        duration: 2,
        opacity: 0,
        y: 100,
        stagger: 0.5,
        ease: 'power2.out'
    });

    // Gallery images animation
    gsap.from('.gallery-img', {
        scale: 0.8,
        duration: 0.5,
        opacity: 0,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '#gallery',
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: true
        }
    });

    // Gallery images hover effect
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('mouseover', () => {
            gsap.to(img, { scale: 1.1, opacity: 1, duration: 0.5 });
        });
        img.addEventListener('mouseout', () => {
            gsap.to(img, { scale: 0.8, opacity: 0.7, duration: 0.5 });
        });
    });

    // Gallery title animation
    gsap.from('.gallery-title', {
        duration: 1.5,
        y: -100,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.gallery-title',
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: true
        }
    });

    // Contact form animation
    gsap.from('#contact form', {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });

    gsap.from('#contact button', {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: 'bounce.out',
        delay: 1.5,
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });

    // Footer animation
    gsap.from('footer', {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: 'power2.out',
        delay: 2
    });
});

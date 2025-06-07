document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // GSAP Animations
  gsap.from('#navbar', { y: -100, duration: 0.8, ease: 'power2.out' });
  
  gsap.from('.animate-fade-in', {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
  });

  gsap.from('.animate-slide-up', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#sobre',
      start: 'top 80%'
    }
  });

  gsap.from('.team-card', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '#equipe',
      start: 'top 80%'
    }
  });
});
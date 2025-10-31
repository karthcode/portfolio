document.addEventListener("DOMContentLoaded", () => {
  // Skill bar animation
  const skillBoxes = document.querySelectorAll('.skill-box');
  function animateSkills() {
    skillBoxes.forEach(box => {
      const percent = box.getAttribute('data-percent');
      const fill = box.querySelector('.skill-fill');
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (boxTop < windowHeight - 50) {
        fill.style.width = percent + '%';
      }
    });
  }
  animateSkills();
  window.addEventListener('scroll', animateSkills);

  // Smooth scrolling for navbar links
  const menuLinks = document.querySelectorAll('nav ul.menu li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile menu toggle
  const nav = document.querySelector('nav');
  const menu = document.querySelector('nav ul.menu');
  const logo = document.querySelector('.logo a');
  
  // Create toggle button dynamically (if not present)
  let toggleBtn = document.querySelector('.menu-toggle');
  if (!toggleBtn) {
    toggleBtn = document.createElement('button');
    toggleBtn.className = 'menu-toggle';
    toggleBtn.innerHTML = '&#9776;';
    nav.querySelector('.navbar').insertBefore(toggleBtn, menu);
  }

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Close menu on link click (for mobile)
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

  // Contact form submission (basic validation + alert)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = contactForm.querySelector('input[type="text"]').value.trim();
      const email = contactForm.querySelector('input[type="email"]').value.trim();
      const message = contactForm.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      // You can replace this with real submission logic (API call)
      alert(`Thanks for reaching out, ${name}! I'll get back to you soon.`);
      contactForm.reset();
    });
  }
});

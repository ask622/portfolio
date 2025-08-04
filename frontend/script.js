// Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelector('.header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  'img, .services-container, .portfolio-box, .contact form',
  { origin: 'bottom' }
);
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js


// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      mobile: form.mobile.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('https://portfolio-8eze.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        successMessage.style.display = 'block';
        form.reset();
      } else {
        alert('Error: ' + (data.message || 'Something went wrong.'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    }
  });
});


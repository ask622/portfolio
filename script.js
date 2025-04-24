// Form submission logic
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');
console.log(navLinks);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance:'80px' ,
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('img,.services-cotainer,.portfolio-box,.contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

ScrollReveal().reveal('.heading', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.portfolio-box', { delay: 300, origin: 'bottom', distance: '50px', interval: 200 });
ScrollReveal().reveal('.services-box', { delay: 300, origin: 'left', distance: '50px', interval: 200 });

const typed =  new typed('.multiple-text',{
    strings: ['Frontend Developer', 'Youtuber', 'Data sienctist'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});
document.querySelector('form[name="contact"]').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const phone = e.target.querySelector('input[type="number"]').value;
    const subject = e.target.querySelector('input[type="text"]:nth-of-type(2)').value;
    const message = e.target.querySelector('textarea').value;

    const userData = {
        name,
        email,
        phone,
        subject,
        message
    };

    // Send form data to the backend API
    fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent successfully!');
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});

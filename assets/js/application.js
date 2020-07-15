

const arrow = document.querySelector('#first-arrow');
    arrow.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(arrow.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

let typed = new Typed('#typed', {
    strings: ['MAMA'],
    typeSpeed: 200,
    showCursor: false
  });


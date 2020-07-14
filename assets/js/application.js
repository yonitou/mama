const arrow = document.querySelector('#first-arrow');
    arrow.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(arrow.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

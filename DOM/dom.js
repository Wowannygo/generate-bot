

const heading = document.querySelector('.heading-style-h1');

heading.addEventListener('mouseover', () => {
    heading.classList.add('heading-hover');
});

heading.addEventListener('mouseout', () => {
    heading.classList.remove('heading-hover');
});

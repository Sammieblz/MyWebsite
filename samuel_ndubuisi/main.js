// Fade in animation for elements on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeIn = () => {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom >= 0) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);

// Slide in animation for form on page load
const form = document.querySelector('form');

const slideInForm = () => {
  form.style.opacity = 1;
  form.style.transform = 'translateX(0)';
};

window.addEventListener('load', slideInForm);

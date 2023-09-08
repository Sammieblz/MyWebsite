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

// Error handler contact page //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="message"]');
    let isValid = true;

    if (nameInput.value.trim() === "") {
      displayError(nameInput, "Please enter your name.");
      isValid = false;
    } else {
      removeError(nameInput);
    }

    if (!isValidEmail(emailInput.value.trim())) {
      displayError(emailInput, "Please enter a valid email address.");
      isValid = false;
    } else {
      removeError(emailInput);
    }

    if (messageInput.value.trim() === "") {
      displayError(messageInput, "Please enter your message.");
      isValid = false;
    } else {
      removeError(messageInput);
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are errors
    }
  });

  function displayError(input, message) {
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    input.parentNode.appendChild(errorElement);
  }

  function removeError(input) {
    const errorElement = input.parentNode.querySelector(".error-message");
    if (errorElement) {
      input.parentNode.removeChild(errorElement);
    }
  }

  function isValidEmail(email) {
    // Add a regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

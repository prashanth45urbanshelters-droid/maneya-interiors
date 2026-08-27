const form = document.querySelector('#enquiry-form');
const error = document.querySelector('#form-error');
const success = document.querySelector('#success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.replace(/\D/g, '');
  if (!name) { error.textContent = 'Please enter your name.'; form.name.focus(); return; }
  if (!/^[6-9]\d{9}$/.test(phone)) { error.textContent = 'Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.'; form.phone.focus(); return; }
  error.textContent = '';
  document.querySelector('#submitted-name').textContent = name.split(' ')[0];
  form.hidden = true;
  success.hidden = false;
});

document.querySelector('#phone').addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/\D/g, '').slice(0, 10);
  if (event.target.value && !/^[6-9]/.test(event.target.value)) {
    error.textContent = 'Indian mobile numbers start with 6, 7, 8 or 9.';
  } else if (error.textContent.includes('Indian mobile')) {
    error.textContent = '';
  }
});

const slides = [...document.querySelectorAll('.hero-image')];
const dots = [...document.querySelectorAll('.hero-dots span')];
let activeSlide = 0;
setInterval(() => {
  slides[activeSlide].classList.remove('is-active');
  dots[activeSlide].classList.remove('is-active');
  activeSlide = (activeSlide + 1) % slides.length;
  slides[activeSlide].classList.add('is-active');
  dots[activeSlide].classList.add('is-active');
}, 3000);

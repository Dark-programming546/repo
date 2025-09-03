const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

function validateName(name) {
  if (!name.trim()) return 'Name is required.';
  if (!/^[a-zA-Z\s]{2,}$/.test(name)) return 'Enter a valid name.';
  return '';
}
function validateEmail(email) {
  if (!email.trim()) return 'Email is required.';
  if (!/^([\w\.-]+)@([\w\.-]+)\.([a-zA-Z]{2,})$/.test(email)) return 'Enter a valid email.';
  return '';
}
function validateMessage(msg) {
  if (!msg.trim()) return 'Message is required.';
  if (msg.length < 5) return 'Message must be at least 5 characters.';
  return '';
}

function showError(input, errorDiv, message) {
  errorDiv.textContent = message;
  input.classList.toggle('error', !!message);
}

form.addEventListener('input', function(e) {
  if (e.target === nameInput) showError(nameInput, nameError, validateName(nameInput.value));
  if (e.target === emailInput) showError(emailInput, emailError, validateEmail(emailInput.value));
  if (e.target === messageInput) showError(messageInput, messageError, validateMessage(messageInput.value));
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  const nameMsg = validateName(nameInput.value);
  const emailMsg = validateEmail(emailInput.value);
  const messageMsg = validateMessage(messageInput.value);
  showError(nameInput, nameError, nameMsg);
  showError(emailInput, emailError, emailMsg);
  showError(messageInput, messageError, messageMsg);
  if (nameMsg || emailMsg || messageMsg) valid = false;
  if (valid) {
    successMsg.textContent = 'Thank you! Your message has been sent.';
    form.reset();
    setTimeout(() => successMsg.textContent = '', 4000);
  } else {
    successMsg.textContent = '';
  }
});